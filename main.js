const { createApp } = Vue;

createApp({
    data() {
        return {
            name: "<b>Hi</b> My Name is Peemaphon Wiangin",
            intro: "Java Developer",
            photoUrl: "image/my.png"
        };
    },
    methods: {
        scrollTo(section) {
            const el = document.getElementById(section);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}).mount('#app');