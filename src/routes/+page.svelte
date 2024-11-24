<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    const shoppingList = writable([]);
    const history = writable([]);
    const notifications = writable([]);

    let newItem = '';

    async function fetchList() {
        const res = await fetch('/api/shopping-list');
        shoppingList.set(await res.json());
    }

    async function addItem(item) {
        await fetch('/api/shopping-list', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ item }),
        });
        await fetchList();
        notifications.set([...$notifications, `Added: ${item}`]);
        newItem = '';
    }

    async function removeItem(id) {
        await fetch('/api/shopping-list', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });
        await fetchList();
        notifications.set([...$notifications, `Removed item #${id}`]);
    }

    onMount(fetchList);

    onMount(() => {
    const cachedList = localStorage.getItem('shoppingList');
    if (cachedList) {
        shoppingList.set(JSON.parse(cachedList));
    }

    fetchList().then(() => {
        shoppingList.subscribe((items) => {
            localStorage.setItem('shoppingList', JSON.stringify(items));
        });
    });
});
</script>

<div class="notifications">
    {#each $notifications as note}
        <div class="notification">{note}</div>
    {/each}
</div>

<input type="text" bind:value={newItem} placeholder="Add an item" />
<button on:click={() => addItem(newItem)}>Add</button>

<ul>
    {#each $shoppingList as item}
        <li>
            {item.item} 
            <button on:click={() => removeItem(item.id)}>🗑️</button>
        </li>
    {/each}
</ul>
