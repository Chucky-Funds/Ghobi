import json
import random
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PRODUCTS = ROOT / 'products.json'

def main():
    choices = ["high", "medium", "low", "out"]
    with PRODUCTS.open('r', encoding='utf-8') as f:
        data = json.load(f)

    for item in data:
        item['inStock'] = random.choice(choices)

    with PRODUCTS.open('w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

if __name__ == '__main__':
    main()
