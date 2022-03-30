<script context="module">
	export async function load({ params, fetch }) {
		const res = await fetch(`/blog/${params.slug}.json`);
		const data = await res.json();
		return {
			props: data,
			maxage: 15
		};
	}
</script>

<script>
	export let slug;
	export let date;
</script>

<h1>Hello, {slug}</h1>
<datetime>{date}</datetime>
