var _ = require('lodash');

function userList(users){
    const container = document.getElementById('root');
    const sortedUsers = _.sortBy(users, 'age');
    this.showList = () => {
        sortedUsers.forEach((user) => {
            const div = document.createElement("div");
            const img = document.createElement("img");
            img.src = 'http://via.placeholder.com/150x150';
            div.appendChild(img);
            div.append(user.name + ' ' + user.age);
            container.appendChild(div);
        });
    }
}

module.exports = userList;