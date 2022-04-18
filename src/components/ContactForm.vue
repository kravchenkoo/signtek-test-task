<template lang="">
    <form @submit.prevent="checkForm" class="contact__form">
                <div class="contact__wrapper">
                    <label for="name">
                        <transition name="contact-error">
                            <span class="contact__error" v-if="errors.name">{{ errors.name }}</span>
                        </transition>
                        <input
                        id="name"
                        v-model="formData.name"
                        type="text"
                        name="name"
                        placeholder="First name"
                        >
                    </label>
                    <label for="LastName">
                        <transition name="contact-error">
                            <span class="contact__error" v-if="errors.lastName">{{ errors.lastName }}</span>
                        </transition>
                        <input
                        id="LastName"
                        v-model="formData.lastName"
                        type="text"
                        name="LastName"
                        placeholder="Last name"
                        >
                    </label>
                    <label for="email">
                        <transition name="contact-error">
                            <span class="contact__error" v-if="errors.email">{{ errors.email }}</span>
                        </transition>
                        <input
                        id="email"
                        v-model="formData.email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        >
                    </label>
                    <input
                    class="contact__submit"
                    type="submit"
                    value="Отправить"
                    >
                    <button @click="$emit('close')" class="contact__close"></button>
                </div>
            </form>
</template>
<script>
export default {
    data() {
        return {
            validForm: false,
            errors: {
                name: '',
                lastName: '',
                email: '',
            },
            formData: {
                name: null,
                lastName: null,
                email: null,
            }
        }
    },
    methods: {
        checkForm() {
        this.errors = {
                name: '',
                lastName: '',
                email: '',
            };
            if (!this.formData.name) {
                this.errors.name = 'Enter name';
                this.validForm = false;
            }
            if (!this.formData.lastName) {
                this.errors.lastName = 'Enter last name';
            }
            if (!this.formData.email) {
                this.errors.email = 'Enter email';
            } else if (!this.validEmail(this.formData.email)) {
                this.errors.email = 'Enter valid email adress.';
            }
            if (this.errors.name.length && this.errors.lastName.length && this.errors.email.length) {
                return true;
            }
            this.toSuccess();
        },
        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        toSuccess() {
            this.$router.push(`/success/${this.formData.name}`);
        }
    }
}
</script>
<style lang="scss">
.contact__form {
    background-color: #293846;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    overflow: hidden;
    .contact__wrapper {
        position: relative;
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 80px 0 50px;
        label {
            margin: 15px 0;
            position: relative;
        }
        .contact__error {
            position: absolute;
            left: 0;
            bottom: 100%;
            color: rgba(209, 48, 8, 0.7);
        }
        input {
            background-color: transparent;
            display: block;
            padding: 5px 50px;
            width: calc(100% - 100px);
            margin: 0;
            color: #fff;
            border: 1px solid #FFFFFF;
            box-sizing: content-box;
            border-radius: 70px;
            line-height: 56px;
            font-size: 4.5rem;
            cursor: pointer;
        }
        .contact__submit {
            margin-top: 15px;
        }
        .contact__close {
            padding: 15px;
            width: 50px;
            height: 50px;
            position: absolute;
            display: block;
            background-color: transparent;
            border: none;
            top: 15px;
            right: 0;
            cursor: pointer;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='50' width='50'%3E%3Cg%3E%3Cpath inkscape:connector-curvature='0' stroke-miterlimit='4' d='M -2.5783352e-4,-0.00146808 17.435473,18.212367' id='imagebot_5' style='opacity:1;fill:%23fff;stroke:%23fff;stroke-width:3.23161912;stroke-linecap:round;stroke-miterlimit:4;fill-opacity:1;stroke-opacity:1'/%3E%3Cpath inkscape:connector-curvature='0' stroke-miterlimit='4' d='M -2.5783352e-4,18.212367 17.435473,-0.00146808' id='imagebot_4' style='opacity:1;fill:%23fff;stroke:%23fff;stroke-width:3.23161912;stroke-linecap:round;stroke-miterlimit:4;fill-opacity:1;stroke-opacity:1'/%3E%3Ctitle id='title9'%3ELayer 1%3C/title%3E%3C/g%3E%3C/svg%3E");
            background-size: cover;
            &:after,
            &:before {
                content: "";
                display: block;
                box-sizing: border-box;
                position: absolute;
                width: 48px;
                height: 4px;
                background: #fff;
                transform: rotate(45deg);
                border-radius: 5px;
                top: 25px;
                left: 1px
            }
            &:after {
                transform: rotate(-45deg)
            }
        }
    }
}
.contact-error-enter-active,
.contact-error-leave-active {
    transition: all .3s ease;
}
.contact-error-enter-from,
.contact-error-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
.contact-error-move {
    transition: transform .3s ease;
}
@media (max-width: 600px) {
    .contact__form {
        .contact__wrapper {
            width: 90%;
        }
    }
}
</style>