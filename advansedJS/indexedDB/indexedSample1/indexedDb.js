document.addEventListener('DOMContentLoaded', (e) => {
  window.indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB;

  console.log('indexedDB =>>', indexedDB);
  let request = indexedDB.open('TaskManager', 1);

  request.onupgradeneeded = (e) => {
    let DB = e.target.result;
    console.log('DB =>>', DB);
    if (!DB.objectStoreNames.contains('Tasks')) {
      let ObjectStore = DB.createObjectStore('Tasks', {
        keyPath: 'id',
        autoIncrement: true,
      });
      ObjectStore.createIndex('IndexByTask', 'task', { unique: true });
      ObjectStore.createIndex('IndexByEmail', 'email', { unique: false });
    }
  };

  request.onsuccess = (e) => {
    console.log('Succes!');
    db = e.target.result;
    showTasks();
  };

  request.onerror = (e) => {
    console.log('Error');
  };
});

function addTask(e) {
  let task = $('#task').val();
  let person = $('#person').val();
  let email = $('#email').val();
  let date = $('#date').val();

  let transaction = db.transaction(['Tasks'], 'readwrite');

  let store = transaction.objectStore('Tasks');

  let Task = {
    task,
    person,
    email,
    date,
  };
  let req = store.add(Task);

  req.onsuccess = (e) => {
    alert('New task was added');
    window.location.replace('index.html');
  };

  req.onerror = (e) => {
    alert('problem with adding');
    return false;
  };
}

function showTasks(e) {
  let transaction = db.transaction(['Tasks'], 'readonly');
  let store = transaction.objectStore('Tasks');
  console.log('store =>>', store);
  let index = store.index('IndexByTask');
  let output = '';

  index.openCursor().onsuccess = (e) => {
    let cursor = e.target.result;
    console.log('cursor =>>', cursor);
    if (cursor) {
      output += `<tr class=task_${cursor.value.id}>
        <td>
          <span>
            ${cursor.value.id}
          </span>
        </td>
        <td>
          <span>
            ${cursor.value.task}
          </span>
        </td>
        <td>
          <span>
            ${cursor.value.person}
          </span>
        </td>
        <td>
          <span>
            ${cursor.value.email}
          </span>
        </td>
        <td>
          <span>
            ${cursor.value.date}
          </span>
        </td>
        <td><button class="btn btn-danger" onclick="deleteTask(${cursor.value.id})">Delete</button></td>
      </tr>`;

      cursor.continue();
    }
    $('#tasks').html(output);
  };
}

function deleteTasks() {
  indexedDB.deleteDatabase('TaskManager');
  window.location.replace('index.html');
}

function deleteTask(id) {
  let transaction = db.transaction(['Tasks'], 'readwrite');
  let store = transaction.objectStore('Tasks');
  let req = store.delete(id);
  req.onsuccess = (e) => {
    $(`.task_${id}`).remove();
    return false;
  };
}
