export default function Login() {
  return `<h1>This login page...</h1>
    <form action="/submit" method="post">
    <input type="text" placeholder="Enter Name"/>
    <br/>
    <br/>
    <input type="password" placeholder="Enter Password"/>
    <br/>
    <br/>
    <button>Login</button>
    </form>`;
}
