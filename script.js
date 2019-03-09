/*Task-1
Создайте объект, свойства которого описывают содержимое дамской сумочки.
- Создайте метод объекта, позволяющий удалить что-то из сумочки
- Создайте метод объекта, позволяющий положить что-то в сумочку*/
var ladiesHandBag = {
    phone: 'Iphone X',
    cosmetics: 'Faberlic',
    hairbrush: 'Dini',
    delElement: function (newProperty){
        delete ladiesHandBag[newProperty];
    },
    addElement: function(newProperty, value){
        ladiesHandBag[newProperty] = value;
    }
}
ladiesHandBag.delElement('hairbrush')
console.log(ladiesHandBag)
ladiesHandBag.addElement('mony','1000$')
console.log(ladiesHandBag)
//////////////////////////////////////////////////////////////////////////////////////
/*Task-2
Объявить конструктор LibraryBook, с помощью которого можно создавать и редактировать объекты, хранящие информацию о книгах в библиотеке

📦 Приватные свойства объекта:
    🔑 title ( название книги ),
    🔑 year ( год издания ),
    🔑 author ( автор ),
    🔑 readerName ( кому выдана ),
    🔑 readerData ( когда выдана )

📦 Приватный метод 🔑 giveTheBook ( client ):
        внесение изменений в свойства:
            🔑 readerName ( client )
            🔑 readerData ( текущая дата )

📋 Публичные методы:
    📋 getBookInfo () - посмотреть информацию о наличии книги 
       ( вывести в консоль readerData )
    📋 getTheBook ( client ) -  получить книгу:
       проверка, что книга не выдана на руки 
       ( приватное свойство readerName 
         должно быть пустой строкой )
       если выдана - вернуть null
       если не выдана, то вызвать приватный метод 
       giveTheBook ( client ) и вернуть bookTitle
    📋 returnBook () - вернуть книгу:
       сбросить значения приватных свойств
       readerName, readerData
Создайте экземпляр книги
Запросите экземпляр от имени ... ( любое имя )*/
var LibraryBook = function ( title = "Без названия", year = "нет данных", author = "нет данных" ) {
        var title = title
        var year = year
        var author = author
        var readerName = null
        var readerData = null
        function giveTheBook ( client, data = new Date() ) {
                readerName = client
                readerData = data
        }
        this.getBookInfo = function () {
                var text = readerName ? "выдана на руки" : "есть в наличии"
                console.info ( `${author}, ${title} (${year}): ${text}` )
        }
        this.getTheBook = function ( client, data ) {
                if ( readerName ) {
                        this.getBookInfo ()
                        return null
                } else {
                        giveTheBook ( client, data )
                        return {
                                title: title,
                                year: year,
                                author: author
                        }
                }
        }
        this.returnBook = function () {
                readerName = null
                readerData = null
        }
}

var books = []
books [0] = new LibraryBook ( "JavaScript Enlightenment", "2012", "Коди Линдли" )
books [1] = new LibraryBook ( "DOM Enlightenment", "2013", "Коди Линдли" )
books [2] = new LibraryBook ( "Eloquent JavaScript", "2011", "Marijn Haverbeke" )

console.log ( books )

books [0].getBookInfo()
books [0].getTheBook( "Иван Иванов", new Date ( 2019, 3, 10 ) )
books [0].getBookInfo()
books [0].returnBook()
books [0].getBookInfo()
///////////////////////////////////////////////////////////////////////////////////////////////
/*Task-3
Объявите конструктор, который создает экземпляры с унаследованным методом addProperty.
Метод addProperty должен принимать два аргумента:
- имя свойства;
- значение свойства;
и добавлять экземпляру новое свойство с указанным именем и значением*/
function AnimalsHome () {
    AnimalsHome.prototype.addProperty = function (name, habitat) {
        this [ name ] = habitat;
    }
}

var res = new AnimalsHome ()
res.addProperty('fish','sea')
console.log(res)
/////////////////////////////////////////////////////////////////////////////////////