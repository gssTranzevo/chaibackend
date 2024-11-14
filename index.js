require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000;

const gitHubData = {
  "login": "gssTranzevo",
  "id": 137390797,
  "node_id": "U_kgDOCDBqzQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/137390797?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/gssTranzevo",
  "html_url": "https://github.com/gssTranzevo",
  "followers_url": "https://api.github.com/users/gssTranzevo/followers",
  "following_url": "https://api.github.com/users/gssTranzevo/following{/other_user}",
  "gists_url": "https://api.github.com/users/gssTranzevo/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/gssTranzevo/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/gssTranzevo/subscriptions",
  "organizations_url": "https://api.github.com/users/gssTranzevo/orgs",
  "repos_url": "https://api.github.com/users/gssTranzevo/repos",
  "events_url": "https://api.github.com/users/gssTranzevo/events{/privacy}",
  "received_events_url": "https://api.github.com/users/gssTranzevo/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-06-22T08:44:04Z",
  "updated_at": "2024-10-25T17:21:18Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/github', (req, res) => {
  res.json(gitHubData);
})

app.get('/twitter', (req, res) => {
    res.send('test.com')
  })

  app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
  })

  app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur code</h2>')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})