<template>
    <Head title="Welcome" />

    <!-- START: header -->
    <header class="absolute w-full z-50 px-4">
        <div class="container mx-auto py-10">
            <div class="flex flex-stretch items-center">
                <div class="w-56 flex items-center">
                    <img src="/images/logo.svg" alt="logo" />
                </div>
                <div class="w-full"></div>
                <!-- START: menu hamburger wrapper -->
                <div class="w-auto">
                    <ul
                        class="
                            fixed
                            bg-white
                            inset-0
                            flex flex-col
                            items-center
                            justify-center
                            md:visible
                            md:flex-row
                            md:bg-transparent
                            md:relative
                            md:opacity-100
                        "
                        :class="
                            menuOpen
                                ? 'opacity-100 z-30'
                                : 'invisible opacity-0'
                        "
                    >
                        <li class="mx-3 py-6 md:py-0">
                            <a
                                href=""
                                class="
                                    text-black
                                    hover:text-white hover:underline
                                "
                                >Showcase</a
                            >
                        </li>
                        <li class="mx-3 py-6 md:py-0">
                            <a
                                href=""
                                class="
                                    text-black
                                    hover:text-white hover:underline
                                "
                                >Catalog</a
                            >
                        </li>
                        <li class="mx-3 py-6 md:py-0">
                            <a
                                href=""
                                class="
                                    text-black
                                    hover:text-white hover:underline
                                "
                                >Delivery</a
                            >
                        </li>
                        <li class="mx-3 py-6 md:py-0">
                            <a
                                href=""
                                class="
                                    text-black
                                    hover:text-white hover:underline
                                "
                                >Rewards</a
                            >
                        </li>
                    </ul>
                </div>
                <!-- END: hamburger menu wrapper -->

                <!-- START: hamburger icon and cart icon -->
                <div class="w-auto">
                    <ul class="flex items-center">
                        <li class="ml-6 block md:hidden">
                            <button
                                class="
                                    flex
                                    z-50
                                    items-center
                                    justiy-center
                                    w-8
                                    h-8
                                    text-black
                                    focus:outline-none
                                "
                                :class="
                                    menuOpen
                                        ? 'fixed top-0 right-0'
                                        : 'relative'
                                "
                                @click="toogleMenu()"
                            >
                                <template v-if="!menuOpen">
                                    <svg
                                        class="fill-current"
                                        width="18"
                                        height="17"
                                        viewBox="0 0 18 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.9773 0.461304H1.04219C0.466585 0.461304 0 0.790267 0 1.19609C0 1.60192 0.466668 1.93088 1.04219 1.93088H15.9773C16.5529 1.93088 17.0195 1.60192 17.0195 1.19609C17.0195 0.790208 16.5529 0.461304 15.9773 0.461304Z"
                                        />
                                        <path
                                            d="M15.9773 7.68802H1.04219C0.466585 7.68802 0 8.01698 0 8.42281C0 8.82864 0.466668 9.1576 1.04219 9.1576H15.9773C16.5529 9.1576 17.0195 8.82864 17.0195 8.42281C17.0195 8.01692 16.5529 7.68802 15.9773 7.68802Z"
                                        />
                                        <path
                                            d="M15.9773 14.9147H1.04219C0.466585 14.9147 0 15.2437 0 15.6495C0 16.0553 0.466668 16.3843 1.04219 16.3843H15.9773C16.5529 16.3843 17.0195 16.0553 17.0195 15.6495C17.0195 15.2436 16.5529 14.9147 15.9773 14.9147Z"
                                        />
                                    </svg>
                                </template>
                                <template v-else>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fill-current"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </template>
                            </button>
                        </li>
                        <li class="ml-6">
                            <button
                                class="
                                    flex
                                    items-center
                                    justiy-center
                                    w-8
                                    h-8
                                    text-black
                                    focus:outline-none
                                "
                            >
                                <svg
                                    class="fill-current"
                                    width="29"
                                    height="25"
                                    viewBox="0 0 29 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.8754 19.9824C9.61762 19.9824 8.59436 21.023 8.59436 22.3021C8.59436 23.5812 9.61762 24.6218 10.8754 24.6218C12.1331 24.6218 13.1564 23.5812 13.1564 22.3021C13.1563 21.023 12.1331 19.9824 10.8754 19.9824ZM10.8754 23.3265C10.3199 23.3265 9.86796 22.8669 9.86796 22.302C9.86796 21.7371 10.3199 21.2775 10.8754 21.2775C11.4308 21.2775 11.8828 21.7371 11.8828 22.302C11.8828 22.867 11.4308 23.3265 10.8754 23.3265Z"
                                    />
                                    <path
                                        d="M18.8764 19.9824C17.6186 19.9824 16.5953 21.023 16.5953 22.3021C16.5953 23.5812 17.6186 24.6218 18.8764 24.6218C20.1342 24.6218 21.1575 23.5812 21.1575 22.3021C21.1574 21.023 20.1341 19.9824 18.8764 19.9824ZM18.8764 23.3265C18.3209 23.3265 17.869 22.8669 17.869 22.302C17.869 21.7371 18.3209 21.2775 18.8764 21.2775C19.4319 21.2775 19.8838 21.7371 19.8838 22.302C19.8838 22.867 19.4319 23.3265 18.8764 23.3265Z"
                                    />
                                    <path
                                        d="M19.438 7.76947H10.3122C9.96051 7.76947 9.67542 8.0594 9.67542 8.41707C9.67542 8.77474 9.96056 9.06467 10.3122 9.06467H19.438C19.7897 9.06467 20.0748 8.77474 20.0748 8.41707C20.0748 8.05935 19.7897 7.76947 19.438 7.76947Z"
                                    />
                                    <path
                                        d="M18.9414 11.1324H10.8089C10.4572 11.1324 10.1721 11.4223 10.1721 11.78C10.1721 12.1377 10.4572 12.4276 10.8089 12.4276H18.9413C19.293 12.4276 19.5781 12.1377 19.5781 11.78C19.5781 11.4224 19.293 11.1324 18.9414 11.1324Z"
                                    />
                                    <path
                                        d="M25.6499 4.88404C25.407 4.58092 25.0472 4.40711 24.6626 4.40711H4.82655L4.42595 2.42947C4.34232 2.01694 4.06563 1.67055 3.68565 1.50276L0.890528 0.268963C0.567841 0.126419 0.192825 0.276999 0.0528584 0.60505C-0.0872597 0.933204 0.0608116 1.31463 0.383347 1.45696L3.17852 2.69081L6.2598 17.9014C6.38117 18.5004 6.90578 18.9352 7.50723 18.9352H22.7635C23.1152 18.9352 23.4003 18.6452 23.4003 18.2876C23.4003 17.9299 23.1152 17.64 22.7635 17.64H7.50728L7.13247 15.7897H22.8814C23.4828 15.7897 24.0075 15.3549 24.1288 14.7559L25.9101 5.96349C25.9876 5.58063 25.8928 5.1871 25.6499 4.88404ZM22.8814 14.4946H6.87012L5.08895 5.70226L24.6626 5.70231L22.8814 14.4946Z"
                                    />
                                    <circle
                                        cx="25"
                                        cy="4.89023"
                                        r="4"
                                        fill="#F9CADA"
                                        class="cart-filled"
                                    />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
                <!-- END: hamburger icon and cart icon -->
            </div>
        </div>
    </header>
    <!-- END: header -->

    <!-- START: Section Hero -->
    <section class="flex items-center hero">
        <!-- START: Section Hero | left side -->
        <div
            class="
                w-full
                absolute
                z-20
                inset-0
                md:relative md:w-1/2
                text-center
                flex flex-col
                justify-center
                hero-caption
            "
        >
            <h1 class="text-3xl md:text-5xl leading-tight font-semibold">
                The Room <br class="" />You Have Dreaming
            </h1>
            <h2 class="px-8 text-base md:px-0 md:text-lg my-6 tracking-wide">
                Kami menyediakan furniture berkelas yang
                <br class="hidden lg:block" />
                membuat ruangan terasa homey
            </h2>
            <div>
                <a
                    href=""
                    class="
                        bg-pink-400
                        text-black
                        hover:bg-black hover:text-pink-400
                        rounded-full
                        px-8
                        py-3
                        mt-4
                        inline-block
                        flex-none
                        transition
                        duration-200
                    "
                    @click="smoothScrool($event)"
                    >Explore Now</a
                >
            </div>
        </div>
        <!-- END: Section Hero | left side -->

        <!-- START: Section Hero | right side -->
        <div class="w-full inset-0 md:relative md:w-1/2">
            <div class="relative hero-image">
                <div class="overlay inset-0 bg-black opacity-30 z-10"></div>
                <div class="overlay right-0 bottom-0 md:inset-0">
                    <button
                        class="video hero-cta focus:outline-none z-30"
                        @click="openModal()"
                    ></button>
                </div>
                <img
                    class="
                        absolute
                        inset-0
                        md:relative
                        w-full
                        h-full
                        object-cover object-center
                    "
                    src="/images/hero-image.jpg"
                    alt=""
                />
            </div>
        </div>
        <!-- END: Section Hero | right side -->
    </section>
    <!-- END: section hero -->

    <!-- START: Browse The Room -->
    <section ref="browse-the-room" class="flex bg-gray-100 py-16 px-4">
        <div class="container mx-auto">
            <div class="flex flex-start mb-4">
                <h3 class="text-2xl capitalize font-semibold">
                    Browse The Room <br class="" />that we designed for you
                </h3>
            </div>
            <div class="grid grid-rows-2 grid-cols-9 gap-4">
                <!-- START: item browse the room 1 -->
                <div
                    class="relative col-span-9 row-span-1 md:col-span-4 card"
                    style="height: 180px"
                >
                    <div class="card-shadow rounded-xl">
                        <img
                            src="/images/content/imagecategory1.jpg"
                            alt=""
                            class="
                                w-full
                                h-full
                                object-cover
                                overlay
                                overflow-hidden
                                rounded-xl
                            "
                        />
                    </div>
                    <div
                        class="
                            overlay
                            left-0
                            top-0
                            bottom-0
                            flex
                            justify-center
                            flex-col
                            pl-48
                            md:pl-72
                        "
                    >
                        <h5 class="text-lg font-semibold">Living Room</h5>
                        <span>18.309 items</span>
                    </div>
                    <a href="#" class="stretched-link">
                        <!-- fake childre -->
                    </a>
                </div>
                <!-- END: item browse the room 1 -->

                <!-- START: item browse the room 2 -->
                <div
                    class="
                        relative
                        col-span-9
                        row-span-1
                        md:col-span-2 md:row-span-2
                        card
                    "
                >
                    <div class="card-shadow rounded-xl">
                        <img
                            src="/images/content/imagecategory3.jpg"
                            alt=""
                            class="
                                w-full
                                h-full
                                object-cover
                                overlay
                                overflow-hidden
                                rounded-xl
                            "
                        />
                    </div>
                    <div
                        class="
                            overlay
                            inset-0
                            md:bottom-auto
                            flex
                            justify-center
                            md:items-center
                            flex-col
                            pl-48
                            md:pl-0
                            pt-0
                            md:pt-12
                        "
                    >
                        <h5 class="text-lg font-semibold">Decoration</h5>
                        <span>77.392 items</span>
                    </div>
                    <a href="#" class="stretched-link">
                        <!-- fake childre -->
                    </a>
                </div>
                <!-- END: item browse the room 2 -->

                <!-- START: item browse the room 3 -->
                <div
                    class="
                        relative
                        col-span-9
                        row-span-1
                        md:col-span-3 md:row-span-2
                        card
                    "
                >
                    <div class="card-shadow rounded-xl">
                        <img
                            src="/images/content/imagecategory4.jpg"
                            alt=""
                            class="
                                w-full
                                h-full
                                object-cover
                                overlay
                                overflow-hidden
                                rounded-xl
                            "
                        />
                    </div>
                    <div
                        class="
                            overlay
                            inset-0
                            md:bottom-auto
                            flex
                            justify-center
                            md:items-center
                            flex-col
                            pl-48
                            md:pl-0
                            pt-0
                            md:pt-12
                        "
                    >
                        <h5 class="text-lg font-semibold">Bed Room</h5>
                        <span>22.094 items</span>
                    </div>
                    <a href="#" class="stretched-link">
                        <!-- fake childre -->
                    </a>
                </div>
                <!-- END: item browse the room 3 -->

                <!-- START: item browse the room 4 -->
                <div class="relative col-span-9 row-span-1 md:col-span-4 card">
                    <div class="card-shadow rounded-xl">
                        <img
                            src="/images/content/imagecategory2.jpg"
                            alt=""
                            class="
                                w-full
                                h-full
                                object-cover
                                overlay
                                overflow-hidden
                                rounded-xl
                            "
                        />
                    </div>
                    <div
                        class="
                            overlay
                            left-0
                            top-0
                            bottom-0
                            flex
                            justify-center
                            flex-col
                            pl-48
                            md:pl-72
                        "
                    >
                        <h5 class="text-lg font-semibold">Children Room</h5>
                        <span>300 items</span>
                    </div>
                    <a href="#" class="stretched-link">
                        <!-- fake childre -->
                    </a>
                </div>
                <!-- END: item browse the room 4 -->
            </div>
        </div>
    </section>
    <!-- END: Browse The Room -->
    <!-- <div class="min-h-screen"></div> -->

    <!-- START: Just Arrived -->
    <section class="flex flex-col py-16">
        <div class="container mx-auto mb-4">
            <div class="flex justify-center text-center mb-4">
                <h3 class="text-2xl capitalize font-semibold">
                    Just Arrived<br />This Summer For You
                </h3>
            </div>
        </div>
    </section>
    <!-- END: Just Arrived -->

    <!-- START: Modal -->
    <div
        v-if="modalOpen"
        class="
            fixed
            inset-0
            z-40
            flex
            items-center
            justify-center
            w-100
            min-h-screen
        "
    >
        <div
            class="fixed inset-0 bg-black opacity-35"
            @click="modalOpen = false"
        ></div>
        <div class="bg-white p-0 md:p-6 z-10">
            <div class="w-screen pb-56 md:w-88 relative z-50">
                <div class="absolute w-full h-full">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/llsjl-_gIpQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
    <!-- END: Modal -->
</template>

<script>
import { Head, Link } from "@inertiajs/inertia-vue3";

export default {
    components: {
        Head,
        Link,
    },
    props: {
        canLogin: Boolean,
        canRegister: Boolean,
        laravelVersion: String,
        phpVersion: String,
    },
    data() {
        return {
            menuOpen: false,
            modalOpen: false,
        };
    },
    methods: {
        toogleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        openModal() {
            this.modalOpen = !this.modalOpen;
        },
        smoothScrool(event) {
            //untuk smooth scrool
            event.preventDefault();
            this.$refs["browse-the-room"].scrollIntoView({
                behavior: "smooth",
            });
        },
    },
};
</script>
