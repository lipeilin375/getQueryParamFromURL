function getQueryParamFromURL(name) {
  search = location.href.split("?")[1];
  if (search == null) {
    return null;
  }
  search_list = search.split("&");
  list = [];
  for (let index = 0; index < search_list.length; index++) {
    list[index] = search_list[index].split("=");
  }
  try {
    for (let index = 0; index < list.length; index++) {
      if (list[index][0] == name) {
        return list[index][1];
      } else {
        continue;
      }
    }
    throw `Fetch none of ${name}`;
  } catch (e) {
    console.warn(e);
    return null;
  }
}
