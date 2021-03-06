let $ = require('jquery')  // jQuery now loaded and assigned to $
let fs = require('fs')
let filename = 'contacts'
let sno = 0
let os = require('os')

$('#add-to-list').on('click', () => {
   let name = $('#Name').val()
   let email = $('#Email').val()

   fs.appendFile('contacts', name + ',' + email + '\n')

   addEntry(name, email)
})

document.write('User Info: ' + JSON.stringify(os.userInfo()) + '<br>' +
    'Platform: ' + os.platform() + '<br>' +
    'User home directory: ' +  os.homedir() + '<br>' +
    'OS Architecture: ' + os.arch() + '<br>')

function addEntry(name, email) {
   if(name && email) {
      sno++
      let updateString = '<tr><td>'+ sno + '</td><td>'+ name +'</td><td>'
         + email +'</td></tr>'
      $('#contact-table').append(updateString)
   }
}

function loadAndDisplayContacts() {
   //Check if file exists
   if(fs.existsSync(filename)) {
      let data = fs.readFileSync(filename, 'utf8').split('\n')
      debugger;
      console.log('data', data)
      data.forEach((contact, index) => {
         let [ name, email ] = contact.split(',')
         addEntry(name, email)
      })

   } else {
      fs.writeFile(filename, '', (err) => {
         if(err)
            console.log(err)
      })
   }
}


loadAndDisplayContacts()
