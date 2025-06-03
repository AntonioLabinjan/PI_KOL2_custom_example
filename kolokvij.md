---

# Programsko inženjerstvo

## Primjer kolokvija #2

Kolokvij nosi ukupno **60 bodova** i piše se **120 minuta**.

Preuzmite projekt s Merlina pod nazivom `primjer_drugog_kolokvija`.

---

## Zadatak 1 – WeatherApp (30 bodova)

### 1. Definirajte rute pomoću Vue Routera:

* `/` → preusmjerava na `/weather`
* `/weather` – prikaz trenutnog vremena za sve gradove
* `/weather/:city` – detaljan prikaz vremena za odabrani grad
* `/weather/:city/history` – prikaz vremenske povijesti za taj grad

### 2. Napravite Pinia spremnik s funkcijama:

* `getCities()` – vraća listu svih gradova iz `weatherData.js`
* `getCityWeather(cityName)` – vraća trenutno vrijeme za određeni grad
* `getCityHistory(cityName)` – vraća povijest vremena za taj grad

### 3. Komponente:

#### WeatherView\.vue

* Prikaz svih gradova (ime i trenutno vrijeme)
* Klikom na grad otvara se ruta `/weather/:city`

#### CityView\.vue

* Detaljan prikaz podataka o vremenu
* Gumb za prikaz vremenske povijesti

#### HistoryView\.vue

* Prikaz vremenskih podataka iz prošlih dana
* Gumb za povratak na prethodnu stranicu

---

## Zadatak 2 – BookStore (30 bodova)

### 1. Definirajte rute:

* `/books` – pregled knjiga
* `/cart` – prikaz košarice
* `/admin` – pregled i brisanje knjiga
* `/admin/add` – dodavanje novih knjiga

### 2. Pinia store:

* `books` – reaktivna lista knjiga iz `booksData.js`
* `cart` – reaktivna lista kupljenih knjiga
* `addToCart(book)` – dodaje knjigu u košaricu
* `removeFromCart(index)` – uklanja knjigu iz košarice
* `addBook(book)` – dodaje novu knjigu
* `removeBook(index)` – briše knjigu

### 3. Komponente:

#### BooksView\.vue

* Lista knjiga (naslov, autor, cijena, slika)
* Gumb „Dodaj u košaricu“

#### CartView\.vue

* Prikaz knjiga u košarici
* Ukupna cijena
* Gumb „Ukloni“

#### AdminView\.vue

* Lista svih knjiga
* Gumb „Obriši“
* Link za dodavanje nove knjige

#### AddBookView\.vue

* Forma za unos: naslov, autor, cijena, slika (URL)
* Gumb „Dodaj knjigu“
* Link za povratak

Testni unos:

* Naslov: *Mali princ*
* Autor: *Antoine de Saint-Exupéry*
* Cijena: *7.99*
* Slika: `https://img.knjizara.hr/maliprinci.jpg`

### 4. Zaglavlje sadrži:

* Linkove: Knjige, Admin, Košarica
* Aktivni link označen zelenom bojom
* Broj stavki u košarici

---

**Predaja:** ZIP arhiva cijelog projekta bez `node_modules` mape.

---
