# Docker inicial

Aquesta pràctica consisteix en juntar el frontend i el backend mitjançant dockerfiles de manera automàtica amb un script.  

## Dockerfiles  

### Frontend  

Començarem ficant-li una tag a la rama master indicant que eixa és la rama original. També crearem la branca sobre la que treballarem aquesta vegada (abans del checkout caldria fer un "git push origin v1" per a pushejar la tag).  
![1](https://user-images.githubusercontent.com/61690297/143276648-ee9d8e73-185c-46fd-b4d1-f7502b71beaa.jpg)  

Després crearem el dockerfile en el qual agafarem la imatge de node amb la versió 14 perquè és la que tenim instal·lada, utilitzem /app com a directori predeterminat, copiem tots els fitxers a /app perquè és el directori que anem a utilitzar, executem un npm install i un npm run build --prod. També agafem la imatge lleugera de nginx i copiem el contingut de frontend al directori que utilitza nginx. També exposarem el port 80 per a poder connectar-nos després.  
![2](https://user-images.githubusercontent.com/61690297/143276681-d4f5bcf9-db00-410a-8afc-3463593ef1ba.jpg)  

No obstant, si ara mateixa encenem docker i fem el build ara mateixa ens trauria el següent error:  
![3](https://user-images.githubusercontent.com/61690297/143276694-6132ba65-1f2c-442f-a927-cb2af06b1608.jpg)  
![3 5](https://user-images.githubusercontent.com/61690297/143279165-d03a45a7-5921-48ca-bb70-8946013c84a8.jpg)  

Aquest error és degut a que no hem afegit les variables d'environment al nou fitxer de producció que s'ha creat. Simplement haurem d'agafar el contingut d'environment.ts i afegir-lo dins d'environment.prod.ts.  
![4](https://user-images.githubusercontent.com/61690297/143279173-cdc83f60-a965-41ee-ad80-692e8b452489.jpg)  

Ara el nostre build ja finalitza correctament.  
![5](https://user-images.githubusercontent.com/61690297/143279196-87166fc0-71af-4605-b76b-ef9339e763c4.jpg)  

Una vegada creada la imatge podem fer-li un run per a veure si arranca com deu. En aquest cas gastarem el port 80:80, ja que hem fet l'expose d'aquest port.  
![6](https://user-images.githubusercontent.com/61690297/143279199-91c117b6-a3b9-4b5d-a8c9-2faad9bd4811.jpg)  

Així que si ara anem a localhost:80 ja ens apareix el nostre frontend funcionant.  
![7](https://user-images.githubusercontent.com/61690297/143279201-9d8245db-a9f8-4741-8e81-9661e0a16b0b.jpg)  

### Backend  

D'una manera molt pareguda al frontend, el backend també tindrà un dockerfile amb apartats iguals, però ací farem l'expose del port 3000 i executarem "node app.js" per a que s'inicie.  
![8](https://user-images.githubusercontent.com/61690297/143279202-3027b944-66c6-4b52-addc-f8201ef247de.jpg)  

Per a que la base de dades funcione, enlloc de localhost a la variable de Mongo haurem de ficar el nom del seu contenedor, que en aquest cas anomenarem "mongo-container".  
![9](https://user-images.githubusercontent.com/61690297/143279204-6a4dee49-6953-41be-8276-1aab785a1cd4.jpg)  

El problema es que al generar la imatge de mongo no tindríem res dins a la base de dades, així que farem un mongodump de la que ja teníem. Açò exportarà el contingut de manera que podem afegir fàcilment amb un sol comandament més avant.  
![10](https://user-images.githubusercontent.com/61690297/143279205-15f98bcb-3288-4b29-a2bb-f68e4596ae33.jpg)  

## Script  

Ara que ho tenim tot preparat podem continuar fent el script que ho crearà i executarà tot. Aquesta tindrà el següent:  
- Creem la network en la que ficarem totes les imatges per a que estiguen connectades.
- Montem les imatges del frontend i del backend.
- Executem Mongo amb el nom del contenedor que havíem configurat abans, li afegim la network, l'obrim de manera detached per a que puga continuar executant altres coses el fitxer i li indiquem els ports que també havíem configurat. També copiarem el directori de tripstockproducts que havíem dumpejat al directori dump del contenidor de mongo. Per últim executarem un mongorestore de la base de dades per a que la importe sencera.
- Finalment executem també el backend i el frontend indicant la network creada, amb mode detached i els ports que havíem configurat.  
![11](https://user-images.githubusercontent.com/61690297/143279207-d997fab0-18bc-46ee-bd3b-ff7401c6b787.jpg)  

A continuació li donem permisos d'execució amb "chmod +x ./script.sh" i l'executem. Aquest ens avisa dels 2 contenidors que ha creat i de que ha recuperat 3 documents de la base de dades degut al restore.  
![13 6](https://user-images.githubusercontent.com/61690297/143279215-74031ee6-e209-4902-9a15-9d661fcaf46c.jpg)  

Ara soles hauríem d'anar a localhost:80 per a veure que ja funciona el carousel amb les imatges que venen de base de dades a través del backend.  
![12](https://user-images.githubusercontent.com/61690297/143279208-2cad5812-e99a-48ac-80ae-cc361ed2cccd.jpg)  

Amb açò l'objectiu principal de l'activitat ja estaria resolt.  

## Utilitzant les imatges des de Docker Hub  

Per a utilitzar les nostres imatges des de Docker Hub primer hem de muntar-les. Per a fer-ho primer farem "docker login" al nostre terminal i introduirem les nostres dades. Una vegada dins soles hem de ficar-li un tag a la nostra imatge i fem el push de cada imatge.  
![13](https://user-images.githubusercontent.com/61690297/143279216-20fb23e8-12bb-4179-9fd6-a8de134921ea.jpg)  

Si anem al nostre Docker Hub veurem que s'han muntat satisfactòriament.  
![14](https://user-images.githubusercontent.com/61690297/143279220-d666a1d4-d2b2-4f2d-9fe5-bded6cf7f655.jpg)  

I per últim hauríem de modificar l'script.sh. Ara no cal que fem build de les imatges perquè ja estan fetes, i a les dos línies finals hem de ficar-li el nom que li hem donat a les nostres imatges.  
![13 3](https://user-images.githubusercontent.com/61690297/143279210-4cff35cc-8447-462a-bcad-b4113baa8fa0.jpg)  

Així ja ho tindríem amb Docker Hub.
