<script>
  import {Route} from 'svelte-navigator'
  import Login from '../pages/Login.svelte'
  import PrivateRoute from './PrivateRoute.svelte'
  import {user} from '../stores'
  import {logout} from '../apis/logout'
  import NotFound from '../pages/NotFound.svelte'
</script>

<main>
    <Route path="login">
        <Login/>
    </Route>

    <Route path="/">
        <h3>Home</h3>
        <p>Home sweet home...</p>
    </Route>

    <Route path="about">
        <h3>About</h3>
        <p>That's what it's all about!</p>
    </Route>

    <PrivateRoute path="profile" let:location>
        <h3>Welcome {$user.username}</h3>
        <button on:click={logout}>Logout</button>
    </PrivateRoute>

    <Route path="/*">
        <NotFound/>
    </Route>
</main>
