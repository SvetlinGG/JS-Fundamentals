function facebookFollowers(input) {
    let followers = {};

    for (const line of input) {
        if (line === "Log out") break;

        let [command, username, count] = line.split(": ");
        
        switch (command) {
            case "New follower":
                if (!followers.hasOwnProperty(username)) {
                    followers[username] = { likes: 0, comments: 0 };
                }
                break;
            case "Like":
                if (!followers.hasOwnProperty(username)) {
                    followers[username] = { likes: parseInt(count), comments: 0 };
                } else {
                    followers[username].likes += parseInt(count);
                }
                break;
            case "Comment":
                if (!followers.hasOwnProperty(username)) {
                    followers[username] = { likes: 0, comments: 1 };
                } else {
                    followers[username].comments++;
                }
                break;
            case "Blocked":
                if (followers.hasOwnProperty(username)) {
                    delete followers[username];
                } else {
                    console.log(`${username} doesn't exist.`);
                }
                break;
        }
    }

    let sortedFollowers = Object.entries(followers).sort((a, b) => b[1].likes + b[1].comments - a[1].likes - a[1].comments);
    console.log(`${sortedFollowers.length} followers`);
    sortedFollowers.forEach(([username, stats]) => {
        console.log(`${username}: ${stats.likes + stats.comments}`);
    });
}




facebookFollowers([
    "New follower: George",
    "Like: George: 5",
    "New follower: George",
    "Log out"
]);
