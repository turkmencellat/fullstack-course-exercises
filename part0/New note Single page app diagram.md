sequenceDiagram
participant browser
participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of browser: {"content": "jack", "date": "2024-11-02T09:59:24.129Z"}
    server-->>browser: 201 created
    deactivate server
