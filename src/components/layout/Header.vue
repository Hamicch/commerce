<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light">
            <a class="navbar-brand" href="#!">Harmart</a>

            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#basicExampleNav1"
                aria-controls="basicExampleNav1"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="basicExampleNav1">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="#!" class="nav-link navbar-link-2 waves-effect">
                            <span class="badge badge-pill red">1</span>
                            <i class="fas fa-shopping-cart pl-0"></i>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle waves-effect"
                            id="navbarDropdownMenuLink3"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                        >
                            <i class="united kingdom flag m-0"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#!">Action</a>
                            <a class="dropdown-item" href="#!">Another action</a>
                            <a class="dropdown-item" href="#!">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="#!" class="nav-link waves-effect" target="_blank">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a href="#!" class="nav-link waves-effect" target="_blank">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a href="#!" class="nav-link waves-effect" target="_blank">Sign in</a>
                    </li>
                    <li class="nav-item pl-2 mb-2 mb-md-0">
                        <a
                            href="#!"
                            type="button"
                            class="btn btn-outline-info btn-md btn-navbar waves-effect waves-black"
                            target="_blank"
                        >Sign up</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>


<script>
export default {
    name: "Header"
};
</script>

<style scoped>
.about {
    position: absolute;
    right: 30px;
    top: 30px;
    color: #fff;
}

.logo {
    color: #fff;
}

.navbar-brand {
    color: black;
    font-weight: 700;
}

.btn-outline-info {
    border: 1.5px solid black !important;
    color: black !important;
}
</style>