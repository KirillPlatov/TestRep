import requests

response = requests.get("https://www.mos.ru/api/acs/v1/role/list")
print(response.text)