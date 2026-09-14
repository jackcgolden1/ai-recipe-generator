export function request(ctx) {
  const { ingredients = [] } = ctx.args;

  const prompt = `Suggest a recipe idea using these ingredients: ${ingredients.join(", ")}.`;

  return {
    resourcePath: `/model/us.anthropic.claude-sonnet-4-6/invoke`,
    method: "POST",
    params: {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        anthropic_version: "bedrock-2023-05-31",
        max_tokens: 1000,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: prompt,
              },
            ],
          },
        ],
      }),
    },
  };
}

export function response(ctx) {
  const parsedBody = JSON.parse(ctx.result.body);

  console.log("Bedrock response:", parsedBody);

  if (parsedBody.content && parsedBody.content.length > 0) {
    return {
      body: parsedBody.content[0].text,
    };
  }

  return {
    body: `Bedrock returned an unexpected response: ${JSON.stringify(parsedBody)}`,
  };
}