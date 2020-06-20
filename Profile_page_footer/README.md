# Team Unicorn

## Linkedin Redesign



<p class="has-line-data" data-line-start="2" data-line-end="3">Welcome to develop branch</p>
<p class="has-line-data" data-line-start="4" data-line-end="5">Here is the DEFAULT branch till we are finally done.</p>
<p class="has-line-data" data-line-start="6" data-line-end="8">Please note: The commit messages should follow a consistent pattern:<br>
Remember,</p>
<p class="has-line-data" data-line-start="9" data-line-end="10"><code>chore, feature, bug</code></p>
<p class="has-line-data" data-line-start="11" data-line-end="17"><strong>For a feature:</strong><br>
<code>git commit -m &quot;feat: implemented user log-in For a bug: git commit -m &quot;</code><br>
<strong>For a bug:</strong><br>
<code>git commit &quot;bug: fix inconsistency in log in screen&quot;</code><br>
<strong>For a chore:</strong><br>
<code>git commit -m &quot;chore: update read me to include API endpoints&quot;</code></p>
<p class="has-line-data" data-line-start="18" data-line-end="19"><strong>Note:</strong> For every feature, bug or chore, you must create a new branch.</p>
<p class="has-line-data" data-line-start="20" data-line-end="22">Example of a feature?<br>
User Login: Branch naming convention follow this pattern: feat/user-login (- - - lower case and separated by dashes)</p>
<p class="has-line-data" data-line-start="23" data-line-end="25">Example of a bug?<br>
Home Page Typo: Branch naming convention follow this pattern: bug/homepage-typo</p>
<p class="has-line-data" data-line-start="26" data-line-end="28">Example of a chore?<br>
Update Read Me: Branch naming convention follow this pattern: branch naming: chore/update-readme</p>
<p class="has-line-data" data-line-start="29" data-line-end="30">Once you are assigned a task on trello, create a branch on your local git and only push to that branch. If you push to any other branch.</p>
<p class="has-line-data" data-line-start="31" data-line-end="32"><strong>To get started:</strong></p>
<p>Click on fork, scroll up. It is by the right top corner</p>
<p>Click on clone or download and copy the url link there</p>
<p class="has-line-data" data-line-start="33" data-line-end="34">Head to your terminal.</p>
<p class="has-line-data" data-line-start="35" data-line-end="36"><code>git clone pasteTheUrlYouJustCopied</code></p>
<p class="has-line-data" data-line-start="37" data-line-end="38"><code>cd Team-unicorn</code></p>
<p class="has-line-data" data-line-start="39" data-line-end="40"><strong>Note:</strong> you will be on the Develop branch automatically. We are not to work on this branch</p>
<p class="has-line-data" data-line-start="41" data-line-end="42">To create and also move to another branch</p>
<p class="has-line-data" data-line-start="43" data-line-end="44">Run: <code>git checkout -b &lt;nameOfBranch&gt;</code></p>
<p class="has-line-data" data-line-start="45" data-line-end="46">Don’t forget the naming convention of branch.</p>
<p class="has-line-data" data-line-start="47" data-line-end="48"><strong>Note:</strong> &lt;nameOfBranch&gt; should be replaced with the feature you are working on (i.e feat/signup-page-design), use hypen when you will normally use space</p>
<p class="has-line-data" data-line-start="49" data-line-end="52">For example,<br>
<code>git checkout -b feat/sign-page-design</code> ✅<br>
<code>git checkout -b feat/sign page design</code> ❌</p>
<p class="has-line-data" data-line-start="53" data-line-end="54">Branch can either be: feature or bug or chore</p>
<p class="has-line-data" data-line-start="55" data-line-end="56">Now, once done writing code and you have tested it and everything is working fine.</p>
<p class="has-line-data" data-line-start="57" data-line-end="59">Run: <code>git add .</code><br>
Run: <code>git commit -m &quot;feat: design signup page&quot;</code></p>
<p class="has-line-data" data-line-start="60" data-line-end="61">Note: when writing commit message, use present-tense</p>
<p class="has-line-data" data-line-start="62" data-line-end="65">DO:<br>
<code>git commit -m &quot;feat/design login page&quot;</code> ✅<br>
<code>git commit -m &quot;bug/fix login page header bug&quot;</code> ✅</p>
<p class="has-line-data" data-line-start="66" data-line-end="69">DON’T:<br>
<code>git commit -m &quot;feat/designed login page&quot;</code>    ❌<br>
<code>git commit -m &quot;bug/fixed login page header bug&quot;</code>    ❌</p>
<p class="has-line-data" data-line-start="70" data-line-end="71"><code>git push origin feat/profile-page-design</code> - (<strong><em>Note how it ends with a branch</em></strong>).</p>
<p class="has-line-data" data-line-start="72" data-line-end="73"><strong>Creating Pull requests</strong></p>
<p class="has-line-data" data-line-start="74" data-line-end="75">PR === Pull request</p>
<p class="has-line-data" data-line-start="76" data-line-end="77">When making a PR, your PR is expected to have the following:</p>
<ol>
<li class="has-line-data" data-line-start="78" data-line-end="79">What is the task completed ?</li>
<li class="has-line-data" data-line-start="79" data-line-end="80">What the PR actually does ?</li>
<li class="has-line-data" data-line-start="80" data-line-end="81">How can this PR be manually tested ?</li>
<li class="has-line-data" data-line-start="81" data-line-end="82">Any background contexts? (maybe something a tester might not notice and be useful for testing)</li>
<li class="has-line-data" data-line-start="82" data-line-end="83">Screenshots (of your implementation - a web page, a mobile app screen or an API payload)</li>
<li class="has-line-data" data-line-start="83" data-line-end="84">The Pull Request Template: PR Title: Task completed (descibe the task)</li>
<li class="has-line-data" data-line-start="84" data-line-end="86">Testing Describe how to test the changes you’ve made. For example, if you added a logout button to the timeline page:</li>
</ol>
<p class="has-line-data" data-line-start="86" data-line-end="89">Visit localhost:8000/timeline and click on the logout button.<br>
Other Information, Add any information that may be necessary. This section is not required.<br>
Screenshots: Add if appropriate.</p>
<p class="has-line-data" data-line-start="90" data-line-end="91"><strong>Screenshots are needed for all frontend works and live link to test.</strong></p>
<p class="has-line-data" data-line-start="92" data-line-end="97">Pull Request Example: Changes<br>
Add a logout button to the timeline page<br>
Testing Visit localhost:8000/timeline and click on the logout button at the top right corner of the page.<br>
Other Info N/A<br>
Screenshots: A screenshot would be added here showing the button on the page.</p>
<p class="has-line-data" data-line-start="98" data-line-end="99">Thanks!</p>