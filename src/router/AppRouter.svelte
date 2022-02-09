<Router>
    <header>
        <h1>History</h1>

        <nav>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="profile">Profile</Link>
        </nav>
    </header>

    <MainScreen/>
</Router>

<script>
  import {Link, Router} from 'svelte-navigator'
  import MainScreen from './MainScreen.svelte'
</script>
