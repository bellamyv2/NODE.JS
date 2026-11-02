# Node.js guided exercises

Node.js is already installed in this environment. From this folder, install the
exercise dependencies with:

```powershell
npm.cmd install
```

Run an exercise with `npm.cmd run hello`, `npm.cmd run server`,
`npm.cmd run filesystem`, or `npm.cmd run password`. The server responds at
http://localhost:3000; stop it with Ctrl+C. The filesystem exercise creates
`welcome.txt` and `hello.txt`, then prints the contents of `hello.txt`.

## Email exercise

The email script uses Nodemailer and requires SMTP credentials supplied through
environment variables. Never put real passwords or personal email addresses in
the source code or commit them to GitHub. Set `SMTP_HOST`, `SMTP_PORT`,
`SMTP_USER`, `SMTP_PASSWORD`, `EMAIL_FROM`, and `EMAIL_TO` in your local
environment, then run `npm.cmd run email`. Use an SMTP provider's recommended
host, port, and credentials; the script uses TLS for port 465.
