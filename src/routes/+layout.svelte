<script lang="ts">
    import '../theme.postcss';
    import '@skeletonlabs/skeleton/styles/skeleton.css';
    import '../app.postcss';

    import { AppShell, AppBar, Toast } from '@skeletonlabs/skeleton';
</script>

<Toast />

<div class="header bg-surface-500 p-2 grid grid-flow-row justify-items-center items-center gap-y-4">
    <a href="/" class="h2 font-semibold text-white">Malaya Missions Project</a>
    <div class="grid grid-flow-col items-center gap-x-10">
        <a href="/" class="p-4 text-white btn">Home</a>
        <a href="/" class="p-4 text-white btn">Media</a>
        <a href="/" class="p-4 text-white btn">About</a>
        <a href="/" class="p-4 text-white btn">Contact</a>
        <a href="/" class="p-4 text-black btn h-10 variant-filled-warning justify-self-end">Give</a>
    </div>
</div>
<div class="m-2">
    <slot />
</div>
