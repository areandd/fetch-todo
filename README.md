1. Make your to-do list sync with the backend API every time a task is added or deleted.

2. Add a clean all tasks button that will delete the entire list from the server and update the empty list on the front-end.

3. There are 3 critical moments in the application timeline (a.k.a. The runtime) to focus on your integration: 

    a - After the list loads empty for the first time (componentDidMount): you should fetch (GET) the data from the API and update the tasks when the information finally arrives. 

    b - When a new task is added: You should PUT the new list on the server. 

    c - When a task is deleted: You should PUT the new list on the server.