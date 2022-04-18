<template>
    <div class="contact">
        <div class="arrow">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="83" height="73" viewBox="0 0 83 73" fill="none">
            <path d="M81.4827 39.8872C83.4073 37.9626 83.4073 34.8422 81.4827 32.9177L50.12 1.55495C48.1954 -0.369621 45.0751 -0.369621 43.1505 1.55495C41.2259 3.47952 41.2259 6.59987 43.1505 8.52444L71.0285 36.4024L43.1505 64.2804C41.2259 66.2049 41.2259 69.3253 43.1505 71.2499C45.0751 73.1744 48.1954 73.1744 50.12 71.2499L81.4827 39.8872ZM0.752014 41.3306L77.9979 41.3306V31.4742L0.752014 31.4742L0.752014 41.3306Z" fill="black"/>
            </svg></span>
        </div>
        <div class="contact__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed auctor viverra ullamcorper donec. </p>
            <br>
            <p>Odio pellentesque lobortis pulvinar vivamus in.</p>
        </div>
        
            <div class="contact__block">
                <div class="contact__button">
                    <button 
                    @click="isFormOpen = true" 
                    class="contact__btn" 
                    >
                        Contact
                    </button>
                </div>
                <transition name="contact">
                    <contact-form 
                    @close="isFormOpen = false" 
                    v-if="isFormOpen"
                    />
                </transition>
            </div>
        <div class="contact__phone">
            <span>Tel . <a href="tel:123456 - 7894">123456 - 7894</a></span>
        </div>
    </div>
</template>
<script>
import contactForm from '@/components/ContactForm'
export default {
    components: {
        contactForm
    },
    data() {
        return {
            isFormOpen: false,
            errors: [],
            name: null,
            lastdName: null,
            email: null,
        }
    },
    methods: {
        
    }
}
</script>
<style lang="scss">
.contact {
    margin-top: 43px;
    margin-bottom: 50px;
    display: grid;
    grid-template-rows: 800px auto auto;
    grid-template-columns: 190px calc(100% - 190px);
    .arrow {
        span {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #FFDB77;
            svg {
                margin: 25% 0;
                width: 77px;
                display: block;
            }
        }
    }
    .contact__text {
        padding: 40px;
        display: block;
        font-weight: 400;
        background-color: #E6E8EA;
        font-size: 4rem;
        line-height: 56px;
        p {
            margin: 0;
        }
    }
    .contact__block {
        position: relative;
        background-color: #293846;
        padding: 94px 0;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        .contact__button {
            overflow: hidden;
        }
        .contact__btn {
            background-color: transparent;
            display: block;
            padding: 5px 50px;
            color: #fff;
            border: 1px solid #FFFFFF;
            box-sizing: content-box;
            border-radius: 70px;
            line-height: 56px;
            font-size: 4.5rem;
            cursor: pointer;
            transition: background-color .25s ease, box-shadow .25s ease, color .4s ease;
            box-shadow: inset 0 0 0 1px #fff;
            position: relative;
            &:hover {
                background-color: #E6E8EA;
                box-shadow: inset 0 0 0 40px #E6E8EA;
                color: #000;
                font-weight: 500;
            }
        }
    }
    .contact__phone {
        padding: 94px 0;
        background-color: #55626D;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4.4rem;
        color: #fff;
        text-align: center;
        a {
            text-decoration: none;
            color: #fff;
        }
    }
}

.contact-enter-from{
    max-height: 0;
}
.contact-enter-to {
    max-height: 500px;
}
.contact-enter-active {
    transition: all .4s linear;
}
.contact-leave-from {
    max-height: 500px;
}
.contact-leave-to {
    max-height: 0;
}
.contact-leave-active {
    transition: all .4s ease;
}
@media (max-width: 600px) {
    .contact {
        grid-template-rows: 800px auto auto;
        grid-template-columns: 100px calc(100% - 100px);
        .contact__text {
            font-size: 2.5rem;
        }
    }
}
@media (min-width: 1200px) {
    .contact {
        position: relative;
        grid-template-rows: 160px 160px;
        grid-template-columns: 160px 2.7fr 1fr;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
        .arrow {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 3;
            background-color: #F2F3F4;
        }
        .contact__text {
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 3;
            font-size: 3.2rem;
        }
        .contact__block {
            position: static;
            grid-column-start: 3;
            grid-column-end: 4;
            grid-row-start: 1;
            grid-row-end: 2;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            .contact__button {
                .contact__btn {
                    padding: 4px 32px;
                    font-size: 2.8rem;
                    line-height: 35px;
                }
            }
        }
        .contact__phone {
            grid-column-start: 3;
            grid-column-end: 4;
            grid-row-start: 2;
            grid-row-end: 3;
            padding: 0;
            font-size: 2.8rem;
            line-height: 34px;
        }
    }
}
</style>