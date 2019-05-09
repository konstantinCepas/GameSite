export function UserRepo() {
    this.registerUser = function(user) {
        var newUser = JSON.stringify(user);
        console.log(newUser);
        localStorage.setItem(user.username, newUser);
        return true;
    }
    this.getUser = function(username) {
        var user = JSON.parse(localStorage.getItem(username));
        return user;
    }
}