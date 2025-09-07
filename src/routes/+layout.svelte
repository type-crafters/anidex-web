<script lang="ts">
    import "$styles/index.css";
    import "bootstrap-icons/font/bootstrap-icons.min.css";

    let { children } = $props();
</script>

<svelte:head>
    <title>Home | AniDex</title>
</svelte:head>

{@render children?.()}
