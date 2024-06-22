<template>
    <AppHeader />

    <main class="main">
        <slot />
    </main>

    <AppFooter />
</template>

<style>
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        /*white-space: break-spaces;*/
        white-space: pre-line;
    }

    a {
        color: inherit;
        text-decoration: none
    }

    ul, li {
        list-style: none;
        padding: 0;
        margin: 0
    }

    button, input, textarea{
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: none;
        background: none;
        font-family: Montserrat, sans-serif
    }

    textarea {
        padding-top: 1rem;
        resize: vertical;
    }

    button {
        cursor: pointer;

    }

    h1,h2,h3,h4 {
        margin: 0
    }

    h1 {
        font-weight: 700;
        font-size: 2.8125rem;
        line-height: 1.2;
        text-transform: uppercase;
    }

    h2 {
        font-weight: 600;
        font-size: 2.5rem;
        line-height: 1.2;
        text-transform: uppercase;
    }

    h3 {
        font-size: 1.875rem;
        line-height: 1.2;
        text-transform: uppercase;
    }

    h4 {
        font-size: 35px;
        line-height: 49px;
    }

    .container {
        width: 100%;
        max-width: 91.875rem;
        padding: 0 0.9375rem;
    }

    @media screen and (max-width: 1200px) {
        h1 {
            font-size: 1.875rem;
        }
        h2 {
            font-size: 2rem;
        }
    }
    @media screen and (max-width: 800px) {
        h1 {
            font-size: 1.5rem;
        }
        h2 {
            font-size: 1.68rem;
        }
        h3 {
            font-size: 1.375rem;
        }

    }
    @media screen and (max-width: 600px) {
        h1 {
            font-size: 1.5rem;
        }
    }
</style>
