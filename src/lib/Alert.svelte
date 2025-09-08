<script lang="ts">
    import type { Snippet } from "svelte";

    interface AlertProps {
        class?: string;
        children: Snippet;
    }

    const { class: className, children }: AlertProps = $props();
    let view = $state(true);
</script>

{#if view}
    <div class="w-full px-4 py-2 bg-pink-800 text-white flex">
        <div class={`${className} flex-1`}>
            {@render children?.()}
        </div>
        <button
            aria-label="Dismiss"
            class="hover:scale-105 duration-200 cursor-pointer"
            onclick={() => (view = false)}
        >
            <i class="bi bi-x-lg text-lg"></i>
        </button>
    </div>
{/if}
