![img](https://imgur.com/fFSAYJU.png)

> Vielä aika pahasti keskeneräinen botti Discordiin, jota kuitenkin päivitellään kohtuullisen aktiivisesti.<br />
> Komentoja luvassa lisää lähiaikoina. Tavoitteena saada botista myös joskus musiikkia toistava, jotta voit kuunnella lempibiisejäsi äänikanavilla. Lähdekoodikin tulee saataville jossain vaiheessa, kunhan viitsimme sen julkaista. ":D"

# Ominaisuudet

| Komento |  Kuvaus |
| --- | --- |
| !apua | Näyttää komennot |
| !ping | Laskee API:n ja sinun latenssin |
| !info | Lisätietoja servusta |
| !kkona | Lisätietoja botista |
| !profiili | Lisätietoja käyttäjästä |
| !kutsu | Lähettää kutsulinkin |
| !bugi | Lähettää bugi-ilmoituksen |
| !google | Tee google haku  |

# Kutsuminen omalle kanavalle

[Kutsu KKona omalle kanavallesi](https://discordapp.com/api/oauth2/authorize?client_id=424343317854289943&permissions=8&scope=bot)

# Käyttäminen
## Esivalmistelut
- [Node.js](https://nodejs.org/en/download/) asennettuna.
- Luot uuden sovelluksen Discordin [sivuilta](https://discordapp.com/developers/applications/me).
- Kutsut sen omalle servullesi.

## Asetukset kuntoon
- Lataat kaikki botin tiedostot täältä GitHubista, jonka jälkeen siirrät lataamasi tiedostot haluamaasi kansioon. Esimerkiksi työpöydälle luot KKona-kansion johon siirrät kaiken.
- Avaat komentokehotteen (CMD) ja navigoit kansioon, jossa botti on. Käytä seuraavia komentoja, jotta saat botin itelläsi toimimaan:
```
npm install discord.js
npm init
```
- Muokkaat asetukset.json kuntoon, jonka löydät /cfg/ kansiosta
- Laitat Discordin [sivuilta](https://discordapp.com/developers/applications/me) saamasi tokenin asetukset-tiedostoon sekä voit muuttaa halutessasi botin prefixiä, joka on oletuksena !
- Nyt käynnistä botti kaynnista.bat tiedostosta ja, jos teit kaiken oikein niin sinulla pitäisi olla juuri luomasi botti servullasi.
 

