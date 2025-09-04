<script lang="ts">
    import "$styles/index.css";

    let { children } = $props();
</script>

<svelte:head>
    <title>Home | AniDex</title>
</svelte:head>

{@render children?.()}
