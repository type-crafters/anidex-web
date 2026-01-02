<script lang="ts">
    import type { Nullable } from "$common/type";
    import { onMount } from "svelte";

    let expanded = $state(false);
    let showOptions = $state(false);
    let isExpandable = $state(false);

    let content: Nullable<HTMLParagraphElement> = null;

    onMount(() => {
        if (!content) return;
        isExpandable = content.clientHeight < content.scrollHeight;
    });

</script>

<div class="flex gap-4 items-start rounded-lg p-2">
    <figure class="w-12 aspect-square h-auto rounded-full overflow-hidden">
        <img
            src="/img/princess-peach-profile-picture.png"
            alt="'s profile"
            class="w-full h-full object-cover object-center"
        />
    </figure>
    <div class="flex-1 flex flex-col gap-2">
        <div class="flex">
            <div class="flex-1">
                <strong>AsyncJavaScript</strong>
            </div>
            <div class="relative flex gap-4">
                <div class="opacity-70">
                    <i class="bi bi-calendar text-xs"></i>
                    <span class="text-sm">December 31, 2025</span>
                </div>
                <button
                    onclick={() => showOptions = !showOptions}
                    aria-label="options"
                    class="aspect-square rounded-full hover:bg-neutral-700 cursor-pointer duration-200"
                >
                    <i class="bi bi-three-dots-vertical p-1"></i>
                </button>
                {#if showOptions}
                    <ul class="absolute right-0 z-5 top-7 bg-neutral-700 py-2 rounded">
                        <li>
                            <button
                                aria-label="report"
                                class="px-4 py-1 hover:bg-neutral-600 cursor-pointer duration-200"
                            >
                                <i class="bi bi-flag text-sm"></i>
                                &nbsp;
                                <span>Report</span>
                            </button>
                        </li>
                    </ul>
                {/if}
            </div>
        </div>
        <div class="flex-1">
            <p
                bind:this={content}
                class={["transition-all duration-200 interpolate-keywords", expanded ? "" : "line-clamp-6"]}
            >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corporis quod porro odio quisquam eos consectetur! Eos adipisci fugiat vel qui hic id, consectetur rem, corporis dolores dolorem modi obcaecati!
            Odit dicta quas nihil deserunt doloremque! Laborum non soluta esse vero assumenda possimus a error alias, natus repellat ab ducimus quam quasi vitae minima voluptatem. Molestiae libero corporis adipisci optio.
            Similique quasi aut voluptates officia laborum blanditiis sed necessitatibus fugiat, est recusandae commodi, enim fugit itaque animi aliquam quo sit. Nihil voluptatum quo libero aperiam in, facilis consequatur necessitatibus eaque?
            Esse accusantium nemo et corporis blanditiis dolorum accusamus fuga, consequatur odio magni, nostrum deleniti, possimus atque at maiores distinctio illo soluta eum sunt magnam. Id, voluptatum hic. Pariatur, et eum.
            Sit deserunt nostrum ut nobis dignissimos impedit minima praesentium ipsam? Architecto pariatur officiis fugiat iure enim similique dolor labore, iusto provident, commodi sapiente et culpa ipsa molestias eius, autem ex.
            </p>
        </div>
        <div class="flex items-center">
            <div class="flex-1 flex gap-4">
                <div class="flex items-center gap-1">
                    <button
                        title="Like comment"
                        aria-label="Like comment"
                        class="aspect-square rounded-full hover:bg-neutral-700 duration-200 cursor-pointer"
                    >
                        <i class="bi bi-hand-thumbs-up icon-center p-2"></i>
                    </button>
                    <span>7.8K</span>
                </div>
                <div class="flex items-center gap-1">
                    <button
                        title="Dislike comment"
                        aria-label="Dislike comment"
                        class="aspect-square rounded-full hover:bg-neutral-700 duration-200 cursor-pointer"
                    >
                        <i class="bi bi-hand-thumbs-down icon-center p-2"></i>
                    </button>
                    <span>532</span>
                </div>
            </div>
            {#if isExpandable}
                <div>
                    <button
                        onclick={() => expanded = !expanded}
                        class="cursor-pointer px-2 py-1 hover:text-pink-600 duration-200"
                    >
                    {#if expanded}
                        <span>Read less</span>
                        <i class="bi bi-chevron-up text-xs"></i>
                    {:else}
                        <span>Read more</span>
                        <i class="bi bi-chevron-down text-xs"></i>
                    {/if}
                    </button>
                </div>
            {/if}
        </div>
    </div>
</div>
