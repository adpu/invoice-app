# Gestor de Factures

Aquesta és una aplicació creada amb **Next.js** per gestionar les teves factures. L'aplicació permet afegir, editar, visualitzar i descarregar factures en format PDF. A més, ofereix un sistema de filtres per data, període o estat de la factura.

## Funcionalitats

- **Afegir factures**: Crea noves factures amb els camps necessaris.
- **Editar factures**: Modifica les dades de factures existents.
- **Visualitzar factures**: Mostra les factures en una llista detallada.
- **Descarregar factures en PDF**: Guarda còpies de les factures en format PDF.
- **Filtres avançats**: Filtra les factures per data, període o estat (pagada, pendent, cancel·lada, etc.).

## Instal·lació

1. Clona aquest repositori al teu equip:

   ```bash
   git clone https://github.com/adpu/invoice-app
   ```

2. Entra al directori on l'has descarregat i instal.la les dependències:
   
    ```bash 
    npm install
    ```

3. Crea o edita el teu arxiu .env.local amb les teves variables d'entorn:

    ```bash
    POSTGRES_URL="..."
    POSTGRES_PRISMA_URL="..."
    POSTGRES_URL_NO_SSL="..."
    POSTGRES_URL_NON_POOLING="..."
    POSTGRES_USER="..."
    POSTGRES_HOST="..."
    POSTGRES_PASSWORD="..."
    POSTGRES_DATABASE="verceldb"
    ```

4. Puja la base de dades:

Taula invoices:

    id integer
    name character varying
    lastname character varying
    address	character varying
    city character varying
    dni	character varying
    description	text
    payment	text
    created_at timestamp
    amount integer
    iva	integer
    irpf integer
    invoiceid character varying 
    status character varying


Taula invoicesetting

    id integer
    logo character varying
    company	character varying
    name character varying
    lastname character varying
    address	character varying
    city character varying
    created_at timestamp
    dni	character varying



5. Executa el projecte en mode desenvolupament:
 
    ```bash 
    npm run dev
    ```

6. Visualitza el projecta:

http://localhost:3000.



## Tecnologies Utilitzades
Next.js: Framework React per crear aplicacions web.
TypeScript: Tipatge estàtic per millorar la qualitat del codi.
Supabase: Utilitzat per gestionar la base de dades de factures.
PDFKit: Generació de factures en format PDF.
CSS Modules: Per al disseny i estilització de components.
Contribució


## Llicència
Aquest projecte està llicenciat sota la MIT License.

Desenvolupat amb ❤️ per adpu



