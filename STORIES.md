Elenco Storie di sviluppo


Versione 1.0:

- Pagina di Login
  x--> Implementare una pagina di Login e gestire solo l'input di User e Password
  x--> Implementare il web service REST che esegua la validazione delle credenziali che restituisca un Token
	Il Token avrà una scadenza
  
  Puntare alla semplicità grafica e logica.
  Rendere la pagina Responsive

  -- Creare/Utilizzare un componente di Loading in attesa che una chiamata API ritorni una risposta
     https://www.npmjs.com/package/react-loader-spinner
     IMPORTANTE: Disinstallare il pacchetto react-loader-spinner ed utilizzare l'equivalente Spinner della libreria MUI
  
  -- x --> Utilizzare axios per richiamare le API
           https://dev.to/eliasjnior/how-to-make-asynchronous-requests-to-your-api-in-react-1a7m
  
  -- x --> Visualizzare la versione in tutte le pagine
  
  -- Aggiungere il componente di routing per reindirizzare l'utente all'applicazione dopo la login corretta
  
  -- Gestire il periodo di validazione delle credenziali dell'utente e la gestione di eventuali messaggi di errore

  -- x --> Gestire internazionalizzazione
     https://lokalise.com/blog/how-to-internationalize-react-application-using-i18next/

Versione 1.1

 -- Salvare le informazioni dell'utente ottenute dal web service di Login in uno store Zustand
 
 -- Assegnare all'applicazione la lingua dell'utente e verificare che tale lingua si valida all'interno di tutta l'applicazione
 
 -- Creare il Template dell'applicazione : header,content,footer e menu a sinistra
 
 -- Le voci di menù devono essere ottenute da un web service e devono essere tradotte --> Aggiungere anche la voce di Uscita
 
 -- Creare il componente Header: a sinistra ci deve essere il logo wizCRM, al centro un campo di ricerca, a destra ci deve essere: nome utente ed immagine utente in forma circolare
 
 -- Creare un sistema di verifica della validità del Token prima di chiamare un web service --> lato backend
 




