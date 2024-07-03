import type { TaskData } from "../Types";

import { PipelineType } from "../../../widgets/src/lib/interfaces/Types";
import { TASKS_MODEL_LIBRARIES } from "../const";

const taskData: TaskData = {
	datasets: [
		{
			description: "A common dataset used for pretraining models with data for many languages.",
			id:          "wikipedia",
		},
		{
			description: "A large English dataset of text obtained from the web.",
			id:          "c4",
		},
	],
	demo: {
		inputs: [
			{
				label:   "Input",
				content: "The <mask> barked at me",
				type:    "text",
			},
			
		],
		outputs: [
			{
				"type": "chart",
				data: [
					{
						"label": "wolf",
						"score": 0.487
					},
					{
						"label": "dog",
						"score": 0.061
					},
					{
						"label": "cat",
						"score": 0.058
					},
					{
						"label": "fox",
						"score": 0.047
					},
					{
						"label": "squirrel",
						"score": 0.025
					}
				]
			},
		],
	},
	id:        "fill-mask",
	label:     PipelineType["fill-mask"],
	libraries: TASKS_MODEL_LIBRARIES["fill-mask"],
	metrics:   [
		{
			description: "Cross Entropy is a metric that calculates the difference between two probability distributions. Each probability distributions is the distribution of predicted words.",
			id:          "cross_entropy",
		},
		{
			description: "Perplexity is the exponential of the cross-entropy loss. It evaluates the probabilities assigned to the next word by the model. Lower perplexity indicates good performance. ",
			id:          "perplexity",
		},
	],
	models: [
		{
			description: "A faster and smaller model than the famous BERT model.",
			id:          "distilbert-base-uncased",
		},
		{
			description: "A multilingual model trained on 100 languages.",
			id:          "xlm-roberta-base",
		},
	],
	summary:      "Masked language modeling is the task of masking some of the words in a sentence and predicting which words should replace those masks. These models are useful when we want to get a statistical understanding of the language in which the model is trained in.",
	widgetModels: ["distilroberta-base"],
	youtubeId:    "mqElG5QJWUg",
};

export default taskData;