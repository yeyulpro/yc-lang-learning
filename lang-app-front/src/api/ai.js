export const analyzeExpression = async (payload) => {
    const res = await fetch("http://localhost:5000/api/v1/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.message || "AI request failed");
    }
    console.log('data', data);
    return data;
  };