<script lang="ts">
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';

    let isDarkMode = false;

    onMount(() => {
        const savedTheme = localStorage.getItem('theme');
        isDarkMode = savedTheme === 'dark';
        setTheme(isDarkMode);
    });

    function toggleTheme() {
        isDarkMode = !isDarkMode;
        setTheme(isDarkMode);
    }

    function setTheme(dark: boolean) {
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', dark);
    }
</script>

<button on:click={toggleTheme} class="rounded-full bg-gray-200 p-2 dark:bg-gray-800">
    {#if isDarkMode}
        <Icon icon="solar:sun-bold-duotone" class="h-5 w-5 text-yellow-500" />
    {:else}
        <Icon icon="solar:moon-bold-duotone" class="h-5 w-5 text-gray-700" />
    {/if}
</button>
