export const formatEffort = (effort) => {
    const hours = Math.floor(effort);
    const minutes = Math.round((effort - hours) * 60);
    return `${hours}h ${minutes}m`;
  };

export  const getStrokeColor = (status) => {
    if (status === "Inactive") {
      return "#DDDEE4";
    } else if (status === "On track") {
      return "#0B9060";
    } else if (status === "At risk") {
      return "#FAAD14";
    } else {
      return "#FF4D4F";
    }
  };

export  const getFlagColor = (impact) => {
    if (impact === "High") {
      return "#FF4D4F";
    } else if (impact === "Medium") {
      return "#FAAD14";
    } else {
      return "#0B9060";
    }
  };


