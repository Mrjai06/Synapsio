---
title: "One minimum stock level for every item is the most expensive compromise"
description: "Why a single reorder rule across the whole warehouse either ties up capital or walks you into a shortage, and what changes when the method is chosen per item."
date: 2026-07-28
locale: "en"
slug: "bestellpunkt-pro-artikel"
tag: "Inventory"
readingTime: 6
---

In nearly every warehouse we look at, there is one number behind each item: the minimum stock level. Fall below it, someone reorders. The number usually dates from the year the ERP was introduced, and nobody has touched it since.

That is not a criticism. It is the only rule that can be rolled out across thousands of items without effort. It has just one flaw: it treats items identically that behave nothing alike.

## Three items, three behaviours

Take a standard screw that goes into every second job. Consumption is steady, variation is small, lead time is known. A fixed reorder point works well here.

Next to it, take a spare part for a machine that is needed three times a year, and then immediately. Consumption is not small, it is **intermittent**: long stretches of zero, then a spike. An average across twelve months does not describe this item, it smears it. Derive the minimum level from that mean and you either hold too much permanently, or you stand there without the part on the fourth occasion.

And take something with an expiry date or a season. Here excess stock costs more than capital, it costs write-offs. The question is no longer “when do we reorder”, it is “how much shortage is cheaper than how much leftover”.

Three items, three entirely different questions. One rule cannot answer them all.

## The methods have names

For each of these patterns a suitable method has existed for decades. This is not a fresh insight from the AI world, it is textbook inventory management. What is new is only that applying it item by item used to be too laborious.

For steady consumption it is the classic **reorder point**: when stock falls below a threshold, a fixed quantity is ordered. For intermittent demand it is **Croston**, a method that estimates demand size and the interval between demands separately, instead of stirring both into one mean. For perishables it is the **newsvendor model**, which weighs the cost of a shortage against the cost of overstock and derives a quantity from that. Alongside those sit **periodic review** for items that are only ordered on fixed dates anyway, and **multi-echelon** methods when the same item sits at several locations.

The arithmetic behind it is open, and should stay that way:

> Cover = stock ÷ average daily consumption
>
> Reorder point = daily consumption × lead time + safety stock

Anyone who reads those two lines can recheck any order proposal. That is exactly the point. An inventory decision that cannot be rechecked gets overruled when in doubt, and then the software was pointless.

## What changes when the choice is made per item

Synapsio assigns one of these methods to each item, rather than laying one rule across the whole warehouse. The assignment rests on actual consumption: how often an item is drawn, how much the quantity varies, how long and how reliable the lead time is.

More important than the assignment is the reason. For every item it states which method was chosen and why. Without that sentence, a choice of method is an assertion, and nobody in purchasing has time to audit assertions.

And the choice does not stand still. When an item runs differently than assumed over months, the method is reassessed. A part that used to move steadily and is now needed once every few months does not belong on a fixed reorder point.

## Where the limit is

Two things we say openly.

First, this needs consumption history. In the first weeks after the start the system does not know your items yet, and the assignment is conservative. That is the right default, but it also means the benefit grows over the first months rather than arriving on day one.

Second, no method replaces knowledge of your own business. If you know a customer will place a large order in autumn, no consumption history knows that. Which is why the threshold above which you are asked stays with you, and why every decision sits in the log with its reason.

The difference from the minimum level set in the year of the rollout is simple in the end: the number is no longer set once and forgotten, it belongs to a method that fits that item and that can be corrected.
