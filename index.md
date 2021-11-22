## Aplicació amb Grafana i Prometheus

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

Primer creem un directori i li fem un pull de la nostra aplicació per a treballar sobre ell.
![1](https://user-images.githubusercontent.com/61690297/142940386-3f73870f-3547-4cd4-85b5-096ef0468226.png)

Després creem la rama sobre la que anem a treballar per a aquesta pràctica.
![2](https://user-images.githubusercontent.com/61690297/142941042-69330ac5-9ee5-47cb-b3cd-a3a240feedef.png)

Primer fem el dockerfile del frontend. Agafem node 14, que es la versió que tenim instal·lada, indiquem que treballarem al directori "app", copiem el que volem al directori, instal·lem i després fiquem també nginx.
![3](https://user-images.githubusercontent.com/61690297/142941101-a9d2fa14-c49e-40d2-bb12-61c2891a6c06.png)

Fer el build ara mateixa ens donaria el següent error relacionat amb les variables d'environment.ts.
![4](https://user-images.githubusercontent.com/61690297/142941750-6b059a74-e26f-483f-b69e-8439508f2eb8.png)

Açò es deu a que hem d'afegir les rutes que tenim a environment.ts al nou arxiu que s'ha creat anomenat "environment.prod.ts"
![6](https://user-images.githubusercontent.com/61690297/142942089-4af35335-0168-4287-849f-15ddc86da53b.png)
 
Ara ja podem fer el build del frontend.
![5](https://user-images.githubusercontent.com/61690297/142942149-d8a87c58-7d7b-42f0-a44b-46bcd2b0bc60.png)
 
Seguidament farem el run i veiem que funciona.
![7](https://user-images.githubusercontent.com/61690297/142942262-194e6e33-b5bc-46ca-9ccd-60dc7835794d.png)
![7.5](https://user-images.githubusercontent.com/61690297/142942321-0784eb35-e645-450a-86ad-1626953144b0.png)

Però encara soles està la vista, així que anem a fer el del backend també.
![8](https://user-images.githubusercontent.com/61690297/142942418-395c7d9c-dcf0-4c0c-91d6-baeb1f4f9a72.png)

Novament ens pot donar el següent error al fer el build.
![9](https://user-images.githubusercontent.com/61690297/142942622-cee5d53c-9b8d-4f15-836c-4f7ecf9c678e.png)

He pogut solucionar-ho amb el comandament "docker-compose build", el qual crea tots els serveis del fitxer.
![10](https://user-images.githubusercontent.com/61690297/142943003-d4f642cb-6e8f-4e8b-b30d-2864b2fbbf38.png)
