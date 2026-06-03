import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

file_path = r"d:\workcode\studiowebsite\studio-website\src\data\blogData.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Locate the blog block for Tandoor Legacy
slug = "the-tandoor-legacy-how-punjabs-village-cooking-tradition-shaped-global-cuisine"
pattern = rf'slug:\s*["\']{re.escape(slug)}["\']'
match = re.search(pattern, content)
if not match:
    print("Could not locate blog slug in file!")
    sys.exit(1)

slug_pos = match.start()
open_brace_pos = -1
for i in range(slug_pos, 0, -1):
    if content[i] == '{':
        open_brace_pos = i
        break

brace_count = 1
close_brace_pos = -1
for i in range(open_brace_pos + 1, len(content)):
    if content[i] == '{':
        brace_count += 1
    elif content[i] == '}':
        brace_count -= 1
        if brace_count == 0:
            close_brace_pos = i
            break

if open_brace_pos == -1 or close_brace_pos == -1:
    print("Could not match brackets for blog object!")
    sys.exit(1)

block = content[open_brace_pos : close_brace_pos + 1]

# Define the new content
new_content_val = """
Introduction

Imagine the aroma of freshly baked *naan*, the smoky essence of *tandoori* chicken, and the crisp, golden crust of *kulchas*—all of these culinary delights share one thing in common: the *tandoor*. This traditional clay oven, rooted deeply in the culture of Punjab, has transcended regional boundaries to become a staple in kitchens and restaurants across the world. But how did a humble village cooking technique influence global cuisine? Let’s explore the incredible journey of the *tandoor*, its historical significance, and its lasting impact on food culture worldwide.

The Origins of the Tandoor: A Fiery Invention

### Ancient Clay and the Indus Valley

The *tandoor*’s history can be traced back thousands of years, with evidence of its use found in the Indus Valley Civilization (around \\`2500 BCE\\`). Archaeologists have unearthed remains of cylindrical clay ovens in ancient settlements like Harappa and Mohenjo-Daro, suggesting that the people of this era baked bread similar to modern-day *roti* and *naan*.

### The Royal Refinements of the Mughal Era

However, the *tandoor*, as we know it today, became a defining feature of Punjabi cuisine during the Mughal era. The Mughals, known for their love of rich, flavorful food, adopted and refined *tandoor* cooking techniques, making dishes like *tandoori* meats and kebabs famous across the Indian subcontinent. Over time, the *tandoor* became an essential part of village life in Punjab, with every home or community center having one.

Tandoor: More Than Just a Cooking Tool

### The Communal Hearth of Punjabi Villages

For centuries, the *tandoor* wasn’t just a cooking appliance—it was a symbol of community and togetherness in Punjabi villages. Unlike modern kitchens, where food is often prepared in isolation, traditional *tandoor* cooking was a shared experience.

● A Community Affair: In many villages, people would take their kneaded dough to the communal *tandoor* to bake *rotis* or *kulchas*. The *tandoor* became a place for neighbors to gather, share stories, and bond over food.

● A Wedding Ritual: Even today, it is common in Punjabi weddings to have a ‘*tandoor* night,’ where family members prepare food together as part of the pre-wedding celebrations.

● A Symbol of Hospitality: Offering freshly made *tandoori* *roti* with butter or *ghee* is a gesture of warmth and hospitality in Punjabi homes.

The Magic of Tandoori Cooking

### The Physics of Clay Oven Heat

What makes *tandoori* food so unique? It’s all in the science of the cooking process. The traditional *tandoor* is a cylindrical clay oven heated with charcoal or wood. When food is placed inside, it cooks at extremely high temperatures, often exceeding \\`400°C (750°F)\\`. The intense heat sears the food quickly, locking in juices and creating a delicious smoky flavor that is hard to replicate in a regular oven.

### Icons of the Tandoori Menu

● *Tandoori* *Roti* & *Naan*: The dough is slapped onto the inner walls of the *tandoor*, where it sticks and bakes to perfection, getting crispy on the outside while remaining soft inside.

● *Tandoori* Chicken: Marinated in a blend of yogurt and spices, the chicken is skewered and cooked in the *tandoor*, giving it that signature charred and smoky taste.

● Seekh Kebabs: Spiced minced meat is molded onto skewers and roasted in the *tandoor*, making for a succulent and flavorful dish.

● Amritsari Kulcha: A crispy, stuffed flatbread baked in the *tandoor*, often filled with spiced potatoes and served with *chole* (chickpeas).

The Tandoor’s Journey Beyond Punjab

### Migration, Partition, and Dhabas

The spread of Punjabi cuisine across India and the world can be largely attributed to the partition of \\`1947\\`. Many Punjabi families, displaced due to the partition, took their culinary traditions with them as they migrated to different parts of India and beyond. As a result, *tandoori* cuisine found its way into street food stalls, *dhabas* (roadside eateries), and eventually fine-dining restaurants.

### Global Expansion and Fusion Culinary Art

The global appeal of the *tandoor* grew rapidly in the 20th century:

● Indian Restaurants Worldwide: From London to New York, Indian restaurants made *tandoori* dishes their highlight, drawing food lovers from all backgrounds.

● Fusion Cuisine: The *tandoor*’s cooking method inspired chefs globally, leading to fusion dishes like *tandoori* pizzas, *tandoori* tacos, and even *tandoori*-flavored grilled fish.

● Home Tandoors: In recent years, portable tandoors and electric versions have made their way into modern kitchens, allowing people to recreate the authentic flavors at home.

The Modern-Day Tandoor: Adapting to Change

### Convenience and Health in Contemporary Gastronomy

While traditional clay tandoors still hold their charm, modern innovations have made *tandoor* cooking more accessible. Gas tandoors, electric tandoors, and even stainless steel versions are now available, making it easier for home cooks and restaurant chefs to use this age-old cooking technique. Additionally, with growing health consciousness, *tandoori* food has gained further popularity. Since *tandoor* cooking requires minimal oil and retains the natural flavors of ingredients, it is considered a healthier alternative to deep-fried foods.

Conclusion: A Tradition That Keeps Burning

The *tandoor* is not just an oven; it is a legacy that has stood the test of time. From ancient Indus Valley kitchens to modern Michelin-starred restaurants, this humble clay oven continues to be at the heart of some of the world’s most beloved dishes. Whether it’s a smoky *naan*, a juicy kebab, or a crispy *kulcha*, the magic of the *tandoor* lives on, bringing people together through the love of food. So, the next time you bite into a piece of *tandoori* chicken or scoop up some curry with warm *naan*, remember—you are tasting a piece of Punjab’s rich culinary history, a tradition that has truly shaped global cuisine.
"""

content_marker = "content: `"
c_start = block.find(content_marker)
if c_start == -1:
    print("Could not find content marker inside block!")
    sys.exit(1)
    
c_text_start = c_start + len(content_marker)
c_text_end = block.rfind("`")

new_block = block[:c_text_start] + new_content_val.strip() + "\n" + block[c_text_end:]

new_content = content[:open_brace_pos] + new_block + content[close_brace_pos + 1:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Tandoor blog content successfully updated with subheadings and escaped backticks.")
