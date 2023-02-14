<script lang="ts">
	import {
		Card,
		CardBody,
		CardHeader,
		CardTitle,
		Col,
		Container,
		FormGroup,
		Input,
		Label,
		Row,
		Styles
	} from 'sveltestrap';

	import { myStore, SOUND_NAMES } from '$lib/store/data';
	const { options, truthy } = myStore;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<link
		rel="stylesheet"
		href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
	/>
</svelte:head>

<div>
	<Card>
		<CardHeader>
			<CardTitle>Generate</CardTitle>
		</CardHeader>
		<CardBody>
			<FormGroup>
				<Label for="exampleNumber">Number</Label>
				<Container sm>
					<Row>
						<Col xs="8">
							<Input
								type="number"
								name="number"
								id="exampleNumber"
								bind:value={$options.combination}
								placeholder="t"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs="12">
							<Input
								type="range"
								name="range"
								id="exampleRange"
								bind:value={$options.combination}
								min={0}
								max={100}
								step={1}
								placeholder="Range placeholder"
							/>
						</Col>
					</Row>
				</Container>
			</FormGroup>
		</CardBody>
	</Card>
	<Card>
		<CardHeader>
			<CardTitle>Sounds</CardTitle>
		</CardHeader>
		<CardBody>
			<!-- <FormGroup>
							{#each SOUND_NAMES as { key, value }, i}
								<Input type="switch" value={$data.sounds.get(key)} label={value} />
							{/each}
						</FormGroup> $data.sounds.get('RIGHT_LETTER')-->
			<FormGroup>
				<Input id="c3" type="switch" bind:checked={$truthy} label={SOUND_NAMES[0].value} />
			</FormGroup>
		</CardBody>
	</Card>
</div>

<Styles />
