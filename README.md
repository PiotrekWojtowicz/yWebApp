<h1 align="center">yWebApp</h1>

---

<p align="center">
  <a href="#introduction">Założenia projektowe</a> •
  <a href="#nit">Narzędzia i technologie</a> •
  <a href="#ss">Szybki start</a>
</p>

---

<div align="center">
  <img width="1582" alt="Zrzut ekranu 2024-01-19 o 22 36 54" src="https://github.com/PiotrekWojtowicz/yWebApp/assets/49318908/9c7435ed-7746-4c2b-91d0-96ff88acbbf5">
</div>

## Założenia projektowe <a name="introduction"></a>

Projekt zakładał stworzenie serwisu społecznościowego, który w działaniu łączyć miał najlepsze z zalet serwisów Reddit czy X.
<br><br>
Projekt został rozdzielony na dwa niezależne serwisy, frontend oparty na reactJS oraz backendowe API napisane w frameworku Spring Boot. Aplikacja napisana jest
w idei CSR website, a do komunikacji między systemami, użyta została biblioteka axios, która jest klientem HTTP używającym 'obietnic' (Promises)
przeznaczony do środowiska Node.js i przeglądarki. Jest izomorficzny, co oznacza, że może działać zarówno w przeglądarce, jak i w środowisku Node.js. Idealnie sprawdził się
więc do komunikacji z API.

<br>
W celu bezpiecznej komunikacji, zapewniliśmy system wymiany token JWT podstawowy schemat działania znajduje się poniżej. Dodatkowo umożliwiliśmy użytkownikom
bezpieczny sposób na przeniesienie ich danych z konta w serwisie GitHub do naszej aplikacji dzięki specyfikacji oAuth2.

<br><br>

Podstawowy diagram interakcji z użytkownikiem prezentuje się następująco
<br><br>
<div align="center">
  <img width="746" alt="image" src="https://github.com/PiotrekWojtowicz/yWebApp/assets/49318908/6f284b84-fc8a-4fa3-940d-4833a2622c49">

</div>


---

## Narzędzia i technologie <a name="nit"></a>
Tech stack opierał się o następujące języki i technologie:

[![My Skills](https://skillicons.dev/icons?i=js,nodejs,react,spring,java,mongo,docker)](https://skillicons.dev)

---

## Szybki start <a name="ss"></a>

Przykład zakłada dostęp lokalny do środowiska nodeJS oraz narzędzia Docker.

0. Utwórz i przejdź do folderu `y`.

1. Używając preferowanej metody pobierz repozytorium (np. `git pull <repo url>`).

2. W folderze frontendywebapp wywołaj `npm install` a następnie `npm start`.

3. Będąc w nadrzędnym folderze (tam gdzie znajduje się plik docker compose) należy użyć `docker-compose up`.

4. Dostępu oczekiwać należy pod `localhost:3000`.

## Przykładowa konfiguracja w popularnym IDE
Zakłada dostęp do oprogramowania IntelliJ IDEA.

### Front End 

<img width="912" alt="Zrzut ekranu 2024-01-19 o 23 16 27" src="https://github.com/PiotrekWojtowicz/yWebApp/assets/49318908/e4221a83-b2a2-4116-9531-59af86cb20e6">

Doatkowo w sekcji "Before lanuch" dodać należy.

<img width="525" alt="Zrzut ekranu 2024-01-19 o 23 17 15" src="https://github.com/PiotrekWojtowicz/yWebApp/assets/49318908/ffacd142-df15-4a8f-af04-c89a5d38ba6f">


### Beck End 

<img width="912" alt="Zrzut ekranu 2024-01-19 o 23 18 24" src="https://github.com/PiotrekWojtowicz/yWebApp/assets/49318908/00dd69cd-e3a5-4b60-bc58-995872d369a3">


---
