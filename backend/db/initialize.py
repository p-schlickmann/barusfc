from connector import DatabaseConnection


def main():
    print('INITIALIZING DB')
    with DatabaseConnection('./data.db') as cursor:
        cursor.execute('CREATE TABLE IF NOT EXISTS bars (id integer primary key, name string, address string, opening_time string, location_link string)')
        cursor.execute('CREATE TABLE IF NOT EXISTS foods (id integer primary key, name string, price integer, bar_id integer, foreign key (bar_id) references bars)')
        cursor.execute('insert into bars values (1, "Container Bar Pantanal", "Pantanal, Florianopolis.", "18h-00h", "https://goo.gl/maps/tGyCfDqJTY68Gpn47")')
        cursor.execute('insert into foods values (1, "Ostra", 30, 1), (2, "Cerveja", 5, 1)')

        cursor.execute('insert into bars values (2, "Container Bar Carvoeira", "Carvoeira, Florianopolis.", "18h-00h", "https://g.page/CTNRBAR?share")')
        cursor.execute('insert into foods values (3, "Marisco", 30, 2), (4, "Bolacha", 5, 2)')

        cursor.execute('insert into bars values (3, "Meu Escritorio Bar", "Pantanal, Florianopolis.", "18h-00h", "https://goo.gl/maps/g1GdGAht56pff3ZBA")')
        cursor.execute('insert into foods values (5, "Bacalhau", 30, 3), (6, "Bolacha", 5, 3)')
    print('DONE')


if __name__ == '__main__':
    main()