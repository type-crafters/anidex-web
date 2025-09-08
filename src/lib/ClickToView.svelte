<script lang="ts">
    import type { PictureSource } from "$common/interface";

    interface ClickToViewProps {
        picture: Array<string | PictureSource>;
        alt: string;
        class?: string;
    }

    const { picture, alt, class: className }: ClickToViewProps = $props();

    let view = $state(false);
</script>

{#if view}
    <div
        class="fixed inset-0 z-100 bg-black/60 backdrop-blur-md flex justify-center items-center"
    >
        <div class="absolute top-4 right-4">
            <button
                aria-label="Close"
                class="cursor-pointer hover:scale-105 duration-150 p-1"
                onclick={() => (view = false)}
            >
                <i class="bi bi-x-lg text-xl"></i>
            </button>
        </div>
        <div class="w-4/5 h-4/5">
            <img
                src={picture.find((source) => typeof source === "string")}
                alt={alt}
                class="w-full h-full aspect-auto object-scale-down object-center"
            />
        </div>
    </div>
{/if}

<button
    class={`${className} cursor-pointer hover:brightness-60 duration-200`}
    onclick={() => (view = true)}
>
    <picture>
        {#each picture as source}
            {#if typeof source === "string"}
                <img
                    src={source}
                    {alt}
                    class="w-full h-full object-cover object-center"
                />
            {:else}
                <source media={source.media} srcset={source.srcset} />
            {/if}
        {/each}
    </picture>
</button>
