(function() {var type_impls = {
"esp_idf_hal":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-tx_ampdu_entry_s\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32630\">source</a><a href=\"#impl-tx_ampdu_entry_s\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html\" title=\"struct esp_idf_hal::sys::tx_ampdu_entry_s\">tx_ampdu_entry_s</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.sub_len\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32632\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html#tymethod.sub_len\" class=\"fn\">sub_len</a>(&amp;self) -&gt; u32</h4></section><section id=\"method.set_sub_len\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32636\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html#tymethod.set_sub_len\" class=\"fn\">set_sub_len</a>(&amp;mut self, val: u32)</h4></section><section id=\"method.dili_num\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32643\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html#tymethod.dili_num\" class=\"fn\">dili_num</a>(&amp;self) -&gt; u32</h4></section><section id=\"method.set_dili_num\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32647\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html#tymethod.set_dili_num\" class=\"fn\">set_dili_num</a>(&amp;mut self, val: u32)</h4></section><section id=\"method.null_byte\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32654\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html#tymethod.null_byte\" class=\"fn\">null_byte</a>(&amp;self) -&gt; u32</h4></section><section id=\"method.set_null_byte\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32658\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html#tymethod.set_null_byte\" class=\"fn\">set_null_byte</a>(&amp;mut self, val: u32)</h4></section><section id=\"method.data\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32665\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html#tymethod.data\" class=\"fn\">data</a>(&amp;self) -&gt; u32</h4></section><section id=\"method.set_data\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32669\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html#tymethod.set_data\" class=\"fn\">set_data</a>(&amp;mut self, val: u32)</h4></section><section id=\"method.enc\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32676\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html#tymethod.enc\" class=\"fn\">enc</a>(&amp;self) -&gt; u32</h4></section><section id=\"method.set_enc\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32680\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html#tymethod.set_enc\" class=\"fn\">set_enc</a>(&amp;mut self, val: u32)</h4></section><section id=\"method.seq\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32687\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html#tymethod.seq\" class=\"fn\">seq</a>(&amp;self) -&gt; u32</h4></section><section id=\"method.set_seq\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32691\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html#tymethod.set_seq\" class=\"fn\">set_seq</a>(&amp;mut self, val: u32)</h4></section><section id=\"method.new_bitfield_1\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32698-32705\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html#tymethod.new_bitfield_1\" class=\"fn\">new_bitfield_1</a>(\n    sub_len: u32,\n    dili_num: u32,\n    null_byte: u32,\n    data: u32,\n    enc: u32,\n    seq: u32\n) -&gt; <a class=\"struct\" href=\"esp_idf_hal/sys/struct.__BindgenBitfieldUnit.html\" title=\"struct esp_idf_hal::sys::__BindgenBitfieldUnit\">__BindgenBitfieldUnit</a>&lt;[u8; 4]&gt;</h4></section></div></details>",0,"esp_idf_hal::sys::tx_ampdu_entry_t"],["<section id=\"impl-Copy-for-tx_ampdu_entry_s\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32625\">source</a><a href=\"#impl-Copy-for-tx_ampdu_entry_s\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Copy for <a class=\"struct\" href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html\" title=\"struct esp_idf_hal::sys::tx_ampdu_entry_s\">tx_ampdu_entry_s</a></h3></section>","Copy","esp_idf_hal::sys::tx_ampdu_entry_t"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-tx_ampdu_entry_s\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32625\">source</a><a href=\"#impl-Clone-for-tx_ampdu_entry_s\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Clone for <a class=\"struct\" href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html\" title=\"struct esp_idf_hal::sys::tx_ampdu_entry_s\">tx_ampdu_entry_s</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32625\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html\" title=\"struct esp_idf_hal::sys::tx_ampdu_entry_s\">tx_ampdu_entry_s</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"since rightside\" title=\"Stable since Rust version 1.0.0\">1.0.0</span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a>Read more</a></div></details></div></details>","Clone","esp_idf_hal::sys::tx_ampdu_entry_t"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-tx_ampdu_entry_s\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32625\">source</a><a href=\"#impl-Debug-for-tx_ampdu_entry_s\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Debug for <a class=\"struct\" href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html\" title=\"struct esp_idf_hal::sys::tx_ampdu_entry_s\">tx_ampdu_entry_s</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32625\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fmt</a>(&amp;self, f: &amp;mut Formatter&lt;'_&gt;) -&gt; Result&lt;(), Error&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a>Read more</a></div></details></div></details>","Debug","esp_idf_hal::sys::tx_ampdu_entry_t"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-tx_ampdu_entry_s\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32625\">source</a><a href=\"#impl-Default-for-tx_ampdu_entry_s\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Default for <a class=\"struct\" href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html\" title=\"struct esp_idf_hal::sys::tx_ampdu_entry_s\">tx_ampdu_entry_s</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_sys/home/runner/work/esp-idf-hal/esp-idf-hal/target/riscv32imc-esp-espidf/debug/build/esp-idf-sys-ab494364eecdabc3/out/bindings.rs.html#32625\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"esp_idf_hal/sys/struct.tx_ampdu_entry_s.html\" title=\"struct esp_idf_hal::sys::tx_ampdu_entry_s\">tx_ampdu_entry_s</a></h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a>Read more</a></div></details></div></details>","Default","esp_idf_hal::sys::tx_ampdu_entry_t"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()