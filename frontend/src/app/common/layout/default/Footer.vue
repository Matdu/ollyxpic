<template>
    <div id="footer">
        <div class="bar">
            <div class="container">
                <router-link :to="{ name: 'pages.contact' }">
                    Found a bug? Report it here! (:
                </router-link>
            </div>
        </div>

        <div class="rights">
            <div class="container">
                <p class="ollyxpic">
				<a href="http://ollyxpic.com">OllyxPic.com</a> &copy; {{ year }}. All rights reserved.</p>
                <p>
                    We would like to thank <a href="http://tibia.wikia.com">TibiaWiki</a> for
                    providing us with tibia content.
                </p>
                <p class="tibia">
                    Please note that the only official website is <a href="http://www.tibia.com" target="_blank">www.tibia.com</a>
                    and from there part of statistical information as well as creature and item graphic info is gathered.
                    Tibia is copyrighted by <a href="https://www.cipsoft.com/" target="_blank">CipSoft GmbH</a>.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            year () {
                return moment().format('YYYY')
            }
        }
    }
</script>