from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from db.connector import DatabaseConnection

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/bars')
def bars():
    bar_list = []
    with DatabaseConnection('./db/data.db') as cursor:
        results = cursor.execute('select * from bars inner join foods on foods.bar_id = bars.id').fetchall()
        for id, name, address, opening_time, location_link, _, food_name, price, __ in results:
            bar = {
                'id': id,
                'name': name,
                'address': address,
                'opening_time': opening_time,
                'location_link': location_link,
                'menu': [
                    {'food_name': food_name, 'price': price}
                ]
            }
            if list(filter(lambda x: x['id'] == id, bar_list)):
                for idx, val in enumerate(bar_list):
                    if val['id'] == id:
                        food_added = bar_list[idx]
                        food_added['menu'] = food_added['menu'] + [{'food_name': food_name, 'price': price}]
                        bar_list[idx] = food_added
            else:
                bar_list.append(bar)
    return {'bars': bar_list}
