<script>
    import WebsiteFooter from "$lib/WebsiteFooter.svelte";
    import WebsiteHeader from "$lib/WebsiteHeader.svelte";

    const { children } = $props();
</script>

<WebsiteHeader />
{@render children?.()}
<WebsiteFooter />