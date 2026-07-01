---
title: "MetaOthello: A Controlled Study of Multiple World Models in Transformers"
toc: false
---

<div class="hero">
  <h1><strong class="title-strong">MetaOthello</strong><span class="title-semi">: A Controlled Study of Multiple World Models in Transformers</span></h1>

  <p class="authors">
    <a href="https://aviralchawla.github.io" target="_blank" rel="noopener">Aviral Chawla</a><sup>1,*</sup> &nbsp;
    <a href="https://galenhall.net" target="_blank" rel="noopener">Galen Hall</a><sup>2,*</sup> &nbsp;
    <a href="https://juniperlovato.com" target="_blank" rel="noopener">Juniper Lovato</a><sup>1</sup>
  </p>

  <p class="affiliations">
    <sup>1</sup>Vermont Complex Systems Institute, University of Vermont &nbsp;·&nbsp;
    <sup>2</sup>University of Michigan
  </p>

  <p class="equal-contrib">*Equal contribution</p>

  <p class="venue-caption">ICML 2026 &nbsp;·&nbsp; Seoul, South Korea</p>

  <div class="button-row">
    <a class="btn btn-primary" href="https://arxiv.org/abs/2602.23164" target="_blank" rel="noopener">arXiv</a>
    <a class="btn" href="https://github.com/aviralchawla/metaothello" target="_blank" rel="noopener">Code</a>
    <a class="btn" href="https://huggingface.co/aviralchawla/metaothello" target="_blank" rel="noopener">Models</a>
    <a class="btn" href="https://huggingface.co/datasets/aviralchawla/metaothello" target="_blank" rel="noopener">Dataset</a>
    <a class="btn" href="#cite">Cite Us</a>
  </div>
</div>

<div class="hero-image-wrap">
  <img src="./assets/hero.png" alt="MetaOthello overview: an ambiguous move sequence is consistent with two different Othello variants (Classic and NoMidFlip); a transformer trained on both processes the sequence through shared early layers, and linear probes recover the correct, variant-specific board state at a later layer.">
  <p class="hero-caption">MetaOthello is a suite of Othello-like games that share the same 8&times;8 board and token vocabulary but follow different rules for what counts as a legal move and how the board updates. We train small GPTs on sequences sampled from mixtures of these games, then use linear probes to read out &mdash; and intervene on &mdash; the board state the model believes it is tracking. When an early move sequence is ambiguous between rule sets, does the model keep one shared world model, several separate ones, or something in between?</p>
</div>

<section id="abstract">
<div class="wrap">

## Abstract

<p class="abstract-body">
Foundation models must handle multiple generative processes, yet mechanistic interpretability largely studies capabilities in isolation; how a single transformer organizes multiple, potentially conflicting &ldquo;world models&rdquo; remains unclear. Prior work on Othello-playing networks tests world-model learning but focuses on one game with one rule set. We introduce <em>MetaOthello</em>, a suite of Othello-like games with shared syntax but different rules or tokenizations, and train small GPTs on mixed-variant data. Transformers trained on multiple variants learn <strong>shared world-state representations</strong>: probes trained on one game intervene on another&rsquo;s board state nearly as well as matched probes. When games conflict, the model resolves the ambiguity through a localized mechanism we identify and steer. For isomorphic games with token remapping, representations are equivalent up to a single orthogonal rotation that generalizes across layers, showing the shared structure is abstract rather than surface-tied. These results show that transformers reconcile conflicting world models by sharing structure and localizing conflict, offering a path toward understanding how they organize many world models at once.
</p>

</div>
</section>

<section id="framework">
<div class="wrap-wide">

## The MetaOthello Framework

<p class="lede">A shared 8&times;8 board and vocabulary, several incompatible rule sets.</p>

<div class="figure-block">
  <img src="./assets/gamerules.png" alt="Table of MetaOthello game variants: Classic, NoMiddleFlip, and DeleteFlanking, each with a different initialization, validation rule, and update rule for how tiles are flipped.">
</div>
<p class="figure-caption"><strong>Game variants.</strong> Each MetaOthello variant shares the same board and token vocabulary but differs in its validation rule (what makes a move legal) and its update rule (which tiles flip as a result). <em>Classic</em> and <em>NoMiddleFlip</em> share a flanking-based validation rule but update the board differently; <em>DeleteFlanking</em> changes both the validation rule (neighbor-based) and the update rule (flanked tiles are removed rather than flipped). Because the games diverge in different ways, an early move sequence is often legal &mdash; and consistent with different board states &mdash; under more than one rule set at once.</p>

</div>
</section>

<section id="findings">
<div class="wrap-wide">

## Key Findings

<div class="findings-grid">
  <div class="finding-card">
    <div class="finding-number">1</div>
    <h3>Shared Representations</h3>
    <p>Transformers learn to generalize shared abstractions. Board represenations for two disparate games is causally interchangeable.</p>
  </div>
  <div class="finding-card">
    <div class="finding-number">2</div>
    <h3>Shared Computation</h3>
    <p>Models also perform game-general computations in early layers and then later identify game identity for game specific calculations.</p>
  </div>
  <div class="finding-card">
    <div class="finding-number">3</div>
    <h3>Ambiguity Circuit</h3>
    <p>When game sequences overlap and board representations are causally shared, we show mechanisms of how model resolve ambiguity.</p>
  </div>
</div>

</div>
</section>

<section id="cite">
<div class="wrap">

## Cite Us

If you find MetaOthello useful, please cite our paper:

</div>

<div class="wrap cite-wrap">

```bibtex
@inproceedings{chawla_hall_2026_metaothello,
  title     = {MetaOthello: A Controlled Study of Multiple World Models in Transformers},
  author    = {Chawla, Aviral and Hall, Galen and Lovato, Juniper},
  booktitle = {Proceedings of the 43rd International Conference on Machine Learning},
  series    = {Proceedings of Machine Learning Research},
  volume    = {306},
  year      = {2026},
  address   = {Seoul, South Korea},
  publisher = {PMLR}
}
```

</div>
</section>

<footer class="site-footer">
  <div class="footer-logos">
    <a class="logo-vcsi" href="https://vermontcomplexsystems.org" target="_blank" rel="noopener"><img src="./assets/vcsi.png" alt="Vermont Complex Systems Institute"></a>
    <a class="logo-cel" href="https://www.compethicslab.org" target="_blank" rel="noopener"><img src="./assets/cel_logo.png" alt="Computational Ethics Lab at UVM"></a>
  </div>
  <p class="footer-authors">
    <a href="https://aviralchawla.github.io" target="_blank" rel="noopener">Aviral Chawla</a> &nbsp;·&nbsp;
    <a href="https://galenhall.net" target="_blank" rel="noopener">Galen Hall</a> &nbsp;·&nbsp;
    <a href="https://juniperlovato.com" target="_blank" rel="noopener">Juniper Lovato</a>
  </p>
  <p>Vermont Complex Systems Institute, University of Vermont &nbsp;·&nbsp; University of Michigan</p>
  <p>Site built with <a href="https://observablehq.com/framework/" target="_blank" rel="noopener">Observable Framework</a>. Source on <a href="https://github.com/aviralchawla/metaothello" target="_blank" rel="noopener">GitHub</a>.</p>
</footer>
