const adzunaApiId = process.env.NEXT_PUBLIC_ADZUNA_API_ID
const adzunaApiKey = process.env.NEXT_PUBLIC_ADZUNA_API_KEY

export default async function fetchAdzunaJobs(searchText, resultsPerPage) {
	const adzunaUrl = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${adzunaApiId}&app_key=${adzunaApiKey}&results_per_page=${resultsPerPage}&what=${searchText}&content-type=application/json`
	try {
		const response = await fetch(adzunaUrl)
		const result = await response.json()
		const jobs = result.results
		return jobs.map((job) => {
			return {
				"id": job.id,
				"title": job.title,
				"description": job.description,
				"company": job.company.display_name,
				"label": job.category.label,
				"tag": job.category.tag,
				"salary_min": job.salary_min,
				"salary_max": job.salary_max,
				"location": job.location.display_name,
				"redirect_url": job.redirect_url
			}
		})
	} catch(error) {
		console.error(error)
	}
}