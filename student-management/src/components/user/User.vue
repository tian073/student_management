<template>
    <div>
        <transition
            enter-active-class="animate__animated animate__lightSpeedInRight"
            leave-active-class="animate__animated animate__lightSpeedOutRight">
            <router-view></router-view>       
       </transition>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .slide-leave {
        opacity: 1;
        transform: translate(0);
    }
    .slide-leave-active {
        transition: opacity 0.7s ease-out;
        opacity: 0;
        animation: slide-out 0.7s ease-out forwards;
    }
    @keyframes slide-out {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(100px)
        }
    }
</style>